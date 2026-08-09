import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader } from "./Section";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const contacts = [
  { role: "President", name: "KS Vignesh", phone: "9342710667" },
  { role: "Vice President", name: "Santhosh Kumar M", phone: "7305422329" },
  { role: "Secretary", name: "Monishwaran K", phone: "7358996358" },
];

const FORMSPREE_URL =
  import.meta.env.VITE_FORMSPREE_URL ||
  (import.meta.env.VITE_FORMSPREE_ID
    ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
    : "https://formspree.io/f/mnpankor");

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            onSubmit={handleSubmit(onSubmit)}
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
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <span className="text-xs text-red-400">{errors.name.message}</span>
                )}
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]"
                  placeholder="you@college.edu"
                />
                {errors.email && (
                  <span className="text-xs text-red-400">{errors.email.message}</span>
                )}
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]"
                  placeholder="Tell us about your idea or question…"
                />
                {errors.message && (
                  <span className="text-xs text-red-400">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-5 py-3 text-sm font-semibold text-white shadow-neon transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Submit"}
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
