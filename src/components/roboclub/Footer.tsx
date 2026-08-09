import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/monishwaran-k-b463a3363/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto: roboticsdroneclub2k26@gmail.com",
    label: "Email",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="ROBOCLUB Logo"
                className="h-11 w-11 rounded-full object-cover shadow-neon border border-[var(--neon)]/30 group-hover:scale-105 transition-transform"
              />
              <span className="font-display text-sm sm:text-base font-bold tracking-wider">
                ROBOTICS <span className="text-gradient">& DRONES CLUB</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Build. Innovate. Engineer.
            </p>
            <p className="mt-2 max-w-xs text-xs text-muted-foreground/80">
              A build-first robotics ecosystem turning students into engineers who
              ship working systems.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
              Follow
            </h4>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Robotics Club. All rights reserved.</span>
          <span className="font-display tracking-widest">ENGINEERING THE FUTURE</span>
        </div>
      </div>
    </footer>
  );
}
