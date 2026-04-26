export default function Navbar() {
  const links = ["Features", "How It Works", "Pricing", "Docs"];

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border-dim bg-bg-base">
      <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2 text-[16px] font-bold text-text-hi">
          <span className="text-accent">▪</span>
          <span>DeviceSync</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-[14px] text-text-mid transition-colors hover:text-text-hi"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="rounded-md bg-accent px-4 py-2 text-[13px] font-semibold text-text-hi transition-colors hover:bg-accent-hover"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}
