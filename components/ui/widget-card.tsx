export function WidgetCard({ title, value, subtitle }: { title: string; value: string; subtitle?: string }) {
  return (
    <article className="panel">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-gold">{value}</p>
      {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
    </article>
  );
}
