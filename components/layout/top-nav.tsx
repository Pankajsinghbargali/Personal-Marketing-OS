const modules = [
  "Dashboard",
  "Idea Vault",
  "Campaign Manager",
  "Content War Room",
  "Lead Tracker",
  "Analytics",
  "Personal Growth"
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-800 bg-charcoal/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold tracking-wide text-gold">MARKETING COMMAND CENTER</h1>
        <nav className="hidden gap-3 text-xs text-zinc-400 lg:flex">
          {modules.map((item) => (
            <span key={item} className="rounded-full border border-zinc-700 px-3 py-1 hover:border-gold hover:text-gold">
              {item}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
