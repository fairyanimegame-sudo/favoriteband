export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#2A2528] bg-[#121013]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[#EDE7DD]">
          Favorite Band Portal
        </span>
        <span className="hidden text-sm text-[#948C86] sm:block">
          A personal lineup, three acts
        </span>
      </div>
    </nav>
  );
}