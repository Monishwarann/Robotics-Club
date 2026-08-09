import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Executives" },
  { href: "#contact", label: "Contact" },
];

const JOIN_FORM_URL =
  import.meta.env.VITE_JOIN_FORM_URL ||
  "https://forms.gle/Pp8XJrTS9j5m9QVj9";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6 ${scrolled ? "shadow-neon" : ""
            }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="ROBOCLUB Logo"
              className="h-11 w-11 rounded-full object-cover shadow-neon border border-[var(--neon)]/30 group-hover:scale-105 transition-transform"
            />
            <span className="font-display text-xs sm:text-sm font-bold tracking-wider">
              ROBOTICS <span className="text-gradient">& DRONES CLUB</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-lg px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-[var(--gradient-neon)] px-5 py-2 text-sm font-semibold text-white shadow-neon transition duration-300 hover:scale-105 active:scale-95"
          >
            <span>Join Now</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href={JOIN_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[var(--gradient-neon)] px-4 py-2 text-sm font-semibold text-white shadow-neon"
              >
                <span>Join Now</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </motion.ul>
        )}
      </div>
    </motion.header>
  );
}
