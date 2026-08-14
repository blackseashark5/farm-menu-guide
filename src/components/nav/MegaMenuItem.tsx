import type { MegaMenuItem as Item } from "@/data/megaMenu";

export function MegaMenuItem({ item }: { item: Item }) {
  return (
    <li>
      <a
        href={item.href}
        className="block rounded px-1 py-[5px] text-[13px] leading-snug text-neutral-700 transition-colors hover:text-brand-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {item.label}
      </a>
    </li>
  );
}
