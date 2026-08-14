import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navEntries } from "@/data/megaMenu";
import { SearchBar } from "./SearchBar";

export function ResponsiveMobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-md text-brand-foreground"
      >
        {open ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl"
            role="dialog"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between gap-3 bg-brand-deep px-4 py-3">
              <span className="text-lg font-bold text-brand-foreground">Kisaan Seva</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-md text-brand-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="border-b border-neutral-200 p-3">
              <SearchBar />
            </div>
            <nav aria-label="Mobile" className="mega-scroll flex-1 overflow-y-auto">
              <ul className="divide-y divide-neutral-200">
                {navEntries.map((entry) => {
                  const isExpanded = expanded === entry.label;
                  if (!entry.sections) {
                    return (
                      <li key={entry.label}>
                        <a
                          href={entry.href}
                          className="block px-4 py-3 text-sm font-semibold text-heading"
                        >
                          {entry.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={entry.label}>
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => setExpanded(isExpanded ? null : entry.label)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-heading"
                      >
                        <span className="min-w-0 truncate">{entry.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isExpanded ? (
                        <div className="animate-mega-in space-y-4 bg-neutral-50 px-4 py-3">
                          {entry.sections.map((section) => (
                            <div key={section.title}>
                              <h3 className="mb-2 text-xs font-bold tracking-wide text-brand-dark uppercase">
                                {section.title}
                              </h3>
                              <ul className="space-y-1">
                                {section.items.map((item) => (
                                  <li key={`${section.title}-${item.label}`}>
                                    <a
                                      href={item.href}
                                      className="block py-1 text-[13px] text-neutral-700"
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="h-full flex-1 bg-black/40"
          />
        </div>
      ) : null}
    </div>
  );
}
