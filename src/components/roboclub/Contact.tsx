import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader } from "./Section";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contacts = [
  { role: "President", name: "Santhosh Kumar M", phone: "7305422329" },
  { role: "Vice President", name: "Maha Lakshmi M", phone: "6383651679" },
  { role: "Secretary", name: "Monishwaran K", phone: "7358996358" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VmNLMoJOgeE3nn6EB';
    
    if (publicKey === 'PUBLIC_KEY') {
      toast.error("Please replace 'PUBLIC_KEY' with your actual EmailJS Public Key.");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cvt36sd',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_4nhbzpg',
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        publicKey
      );
      toast.success("Message sent successfully!");
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSent(false), 5000);
    } catch (error: any) {
      console.error(error);
      const errorMsg = error?.text || error?.message || "Please try again.";
      toast.error(`Failed to send message: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Contact <span className="text-gradient">Robotics Club</span></>}
          description="Reach our core team or send us a message — we build, we listen, we ship."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.div
              key={c.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-neon"
            >
              <span className="font-display text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
                {c.role}
              </span>
              <h3 className="mt-2 text-xl font-bold">{c.name}</h3>
              <a
                href={`tel:${c.phone}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-[var(--neon-cyan)]"
              >
                <Phone className="h-4 w-4" /> {c.phone}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-7"
          >
            <h3 className="font-display text-2xl font-bold">Send a Message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We typically respond within 48 hours.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]"
                  placeholder="you@college.edu"
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]"
                  placeholder="Tell us about your idea or question…"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-5 py-3 text-sm font-semibold text-white shadow-neon transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                {loading ? "Sending..." : sent ? "Message Sent ✓" : "Submit"}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass relative overflow-hidden rounded-3xl p-7"
          >
            <h3 className="font-display text-2xl font-bold">Visit the Lab</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Robotics Club Headquarters — Mechanical Block
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg glass-neon text-[var(--neon-cyan)]">
                  <MapPin className="h-4 w-4" />
                </span>
                363, Arcot Road, Puliyur 1st Main Rd, Subedar Colony,
                Kodambakkam, Chennai,
                Tamil Nadu 600024,India
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg glass-neon text-[var(--neon-cyan)]">
                  <Mail className="h-4 w-4" />
                </span>
                hello@Robotics Club.in
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=Meenakshi+Sundararajan+Engineering+College"
              target="_blank"
              rel="noopener noreferrer"
              className="group/map mt-6 block aspect-video w-full overflow-hidden rounded-2xl border border-[var(--neon)]/20 relative"
            >
              <img
                src="/map.png"
                alt="Google Maps location of Meenakshi Sundararajan Engineering College"
                className="h-full w-full object-cover transition duration-500 group-hover/map:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/map:opacity-100 transition-opacity flex items-center justify-center">
                <div className="glass-neon rounded-2xl px-5 py-3 text-center transform translate-y-2 group-hover/map:translate-y-0 transition-transform duration-300">
                  <MapPin className="mx-auto h-6 w-6 text-[var(--neon-cyan)]" />
                  <p className="font-display mt-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
                    Open in Maps
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
