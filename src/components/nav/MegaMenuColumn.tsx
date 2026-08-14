import type { MegaMenuSection } from "@/data/megaMenu";
import { MegaMenuItem } from "./MegaMenuItem";

export function MegaMenuColumn({ section }: { section: MegaMenuSection }) {
  return (
    <div className="min-w-0 border-neutral-200 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0">
      <h3 className="mb-2 text-[13px] font-bold tracking-wide text-brand-dark uppercase">
        {section.title}
      </h3>
      <div className="mb-3 h-px w-full bg-neutral-200" />
      <ul className="space-y-[2px]">
        {section.items.map((item) => (
          <MegaMenuItem key={`${section.title}-${item.label}`} item={item} />
        ))}
      </ul>
    </div>
  );
}
