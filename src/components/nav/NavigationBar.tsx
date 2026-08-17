import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { navEntries } from "@/data/megaMenu";

const BrandsMegaMenu = lazy(() =>
  import("./BrandsMegaMenu").then((m) => ({ default: m.BrandsMegaMenu })),
);

const panelId = (label: string) => `mega-panel-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
const triggerId = (label: string) => `${panelId(label)}-trigger`;

export function NavigationBar() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenLabel(null), 140);
  }, [cancelClose]);

  const open = useCallback(
    (label: string | null) => {
      cancelClose();
      setOpenLabel(label);
    },
    [cancelClose],
  );

  useEffect(() => cancelClose, [cancelClose]);

  const focusTrigger = useCallback((index: number) => {
    setActiveIndex(index);
    triggerRefs.current[index]?.focus();
  }, []);

  const closeAndReturnFocus = useCallback(() => {
    setOpenLabel(null);
    triggerRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  const panelLinks = () =>
    Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);

  const focusPanel = (position: "first" | "last") => {
    // Wait for the lazily-loaded panel to paint before moving focus into it.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
      const links = panelLinks();
      const target = position === "first" ? links[0] : links[links.length - 1];
      target?.focus();
      });
    });
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent, index: number, hasPanel: boolean) => {
    const last = navEntries.length - 1;
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusTrigger(index === last ? 0 : index + 1);
        setOpenLabel(null);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusTrigger(index === 0 ? last : index - 1);
        setOpenLabel(null);
        break;
      case "Home":
        e.preventDefault();
        focusTrigger(0);
        break;
      case "End":
        e.preventDefault();
        focusTrigger(last);
        break;
      case "ArrowDown":
      case "Enter":
      case " ":
        if (!hasPanel) break;
        e.preventDefault();
        open(navEntries[index]!.label);
        focusPanel("first");
        break;
      case "ArrowUp":
        if (!hasPanel) break;
        e.preventDefault();
        open(navEntries[index]!.label);
        focusPanel("last");
        break;
      case "Escape":
        setOpenLabel(null);
        break;
      default:
        break;
    }
  };

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    const links = panelLinks();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        links[current + 1 >= links.length ? 0 : current + 1]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        links[current <= 0 ? links.length - 1 : current - 1]?.focus();
        break;
      case "Home":
        e.preventDefault();
        links[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        links[links.length - 1]?.focus();
        break;
      case "Escape":
        e.preventDefault();
        closeAndReturnFocus();
        break;
      default:
        break;
    }
  };

  const openEntry = navEntries.find((e) => e.label === openLabel && e.sections);

  return (
    <div
      ref={containerRef}
      data-mega-root
      className="relative hidden border-b border-neutral-200 bg-white lg:block"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpenLabel(null);
      }}
    >
      <nav aria-label="Primary" className="mega-scroll mx-auto max-w-[1400px] overflow-x-auto px-6">
        <ul role="menubar" className="flex items-stretch justify-center gap-1 min-w-max">
          {navEntries.map((entry, index) => {
            const isOpen = openLabel === entry.label && !!entry.sections;
            return (
              <li
                key={entry.label}
                role="none"
                onMouseEnter={() => open(entry.sections ? entry.label : null)}
              >
                <a
                  ref={(el) => {
                    triggerRefs.current[index] = el;
                  }}
                  id={triggerId(entry.label)}
                  role="menuitem"
                  href={entry.href}
                  tabIndex={activeIndex === index ? 0 : -1}
                  aria-haspopup={entry.sections ? "true" : undefined}
                  aria-expanded={entry.sections ? isOpen : undefined}
                  aria-controls={entry.sections && isOpen ? panelId(entry.label) : undefined}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(e) => onTriggerKeyDown(e, index, !!entry.sections)}
                  className={`flex items-center gap-1 border-b-[3px] px-3.5 py-3.5 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand xl:text-sm ${
                    isOpen
                      ? "border-brand bg-brand/5 text-brand-dark"
                      : "border-transparent text-heading hover:border-brand hover:text-brand-dark"
                  }`}
                >
                  {entry.label}
                  {entry.sections ? (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {openEntry?.sections ? (
        <Suspense fallback={null}>
          <BrandsMegaMenu
            ref={panelRef}
            id={panelId(openEntry.label)}
            labelledBy={triggerId(openEntry.label)}
            sections={openEntry.sections}
            onKeyDown={onPanelKeyDown}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        </Suspense>
      ) : null}
    </div>
  );
}
