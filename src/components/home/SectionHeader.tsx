export function SectionHeader({
  title,
  subtitle,
  emoji,
}: {
  title: string;
  subtitle?: string;
  emoji?: string;
}) {
  return (
    <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        <h2 className="text-xl font-bold text-heading sm:text-2xl">
          {title} {emoji ? <span aria-hidden>{emoji}</span> : null}
        </h2>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      <a href="#all" className="shrink-0 text-sm font-medium text-heading underline">
        View All
      </a>
    </div>
  );
}
