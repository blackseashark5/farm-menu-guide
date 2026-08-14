import type { MegaMenuSection } from "@/data/megaMenu";
import { MegaMenuColumn } from "./MegaMenuColumn";

type Props = {
  sections: MegaMenuSection[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function BrandsMegaMenu({ sections, onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="animate-mega-in absolute top-full left-0 z-50 w-screen border-t border-neutral-200 bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.28)]"
    >
      <div className="mx-auto max-h-[70vh] max-w-[1400px] overflow-y-auto px-6 py-8 mega-scroll">
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
