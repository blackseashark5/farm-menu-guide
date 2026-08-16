import type { Ref } from "react";
import type { MegaMenuSection } from "@/data/megaMenu";
import { MegaMenuColumn } from "./MegaMenuColumn";

type Props = {
  sections: MegaMenuSection[];
  id?: string;
  labelledBy?: string;
  ref?: Ref<HTMLDivElement>;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function BrandsMegaMenu({
  sections,
  id,
  labelledBy,
  ref,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <div
      ref={ref}
      id={id}
      role="group"
      aria-labelledby={labelledBy}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="animate-mega-in absolute top-full left-0 z-50 w-screen border-t border-neutral-200 bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.28)]"
    >
      <div className="mega-scroll mx-auto max-h-[70vh] max-w-[1400px] overflow-y-auto px-6 py-8">
        <div
          className="grid gap-x-6 gap-y-8"
          style={{ gridTemplateColumns: `repeat(${Math.min(sections.length, 5)}, minmax(0, 1fr))` }}
        >
          {sections.map((section) => (
            <MegaMenuColumn key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
