import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { navEntries } from "@/data/megaMenu";
import { BrandsMegaMenu } from "./BrandsMegaMenu";

export function NavigationBar() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenLabel(null), 120);
  }, [cancelClose]);

  const open = useCallback(
    (label: string | null) => {
      cancelClose();
      setOpenLabel(label);
    },
    [cancelClose],
  );

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenLabel(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openEntry = navEntries.find((e) => e.label === openLabel && e.sections);

  return (
    <div
      ref={containerRef}
      className="relative hidden border-b border-neutral-200 bg-white lg:block"
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpenLabel(null);
      }}
    >
      <nav aria-label="Primary" className="mx-auto max-w-[1400px] px-6">
        <ul className="flex items-stretch justify-center gap-1">
          {navEntries.map((entry) => {
            const isOpen = openLabel === entry.label && !!entry.sections;
            return (
              <li key={entry.label} onMouseEnter={() => open(entry.sections ? entry.label : null)}>
                <a
                  href={entry.href}
                  aria-haspopup={entry.sections ? "true" : undefined}
                  aria-expanded={entry.sections ? isOpen : undefined}
                  onFocus={() => open(entry.sections ? entry.label : null)}
                  className={`flex items-center gap-1 border-b-[3px] px-3.5 py-3.5 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors xl:text-sm ${
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
        <BrandsMegaMenu
          sections={openEntry.sections}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      ) : null}

      {/* closes the menu when the pointer leaves both the bar and the dropdown */}
      <div className="absolute inset-0 -z-10" onMouseEnter={scheduleClose} aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden />
      <span
        className="absolute inset-x-0 top-0 h-full"
        style={{ pointerEvents: "none" }}
        aria-hidden
      />
      <MouseLeaveGuard onLeave={scheduleClose} />
    </div>
  );
}

function MouseLeaveGuard({ onLeave }: { onLeave: () => void }) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest?.("[data-mega-root]")) onLeave();
    };
    document.addEventListener("mouseover", handler);
    return () => document.removeEventListener("mouseover", handler);
  }, [onLeave]);
  return null;
}
