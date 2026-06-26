import { motion } from "framer-motion";
import { Phone, Linkedin, Github, Mail } from "lucide-react";
import { SectionHeader } from "./Section";

type Member = {
  name: string;
  role: string;
  meta: string;
  phone: string;
  image?: string;
  linkedIn?: string;
  github?: string;
  mail?: string;
  accent?: boolean;
};

const advisor: Member = {
  name: "Mr. V. Arul",
  role: "Faculty Advisor & Club Incharge",
  meta: "Faculty",
  phone: "9047290488",
  image: "/arul.jpg",
  linkedIn: "https://www.linkedin.com/in/v-arul-7874444a/",
  mail: "[EMAIL_ADDRESS]",
  github: "https://github.com/varul-mech",
  accent: true,
};

const team: Member[] = [
  {
    name: "Santhosh Kumar M",
    role: "President",
    meta: "MECH — III Year",
    phone: "7305422329",
    image:"/santhosh.jpg",
    linkedIn: "https://www.linkedin.com/in/san",
    mail: "[EMAIL_ADDRESS]",
    github: "https://github.com/varul-mech"
  },
  {
    name: "Maha Lakshmi M",
    role: "Vice President",
    meta: "MECH — III Year",
    phone: "6383651679",
    image: "/maha.jpeg",
    linkedIn: "https://www.linkedin.com/in/maha-lakshmi-237a44363/",
    mail: "mahasaranya0507@gmail.com",
    github: "https://github.com/varul-mech"
  },
  {
    name: "Monishwaran K",
    role: "Secretary",
    meta: "MECH — III Year",
    phone: "7358996358",
    image: "/monishwaran.jpg",
    linkedIn: "https://www.linkedin.com/in/monishwaran-k-b463a3363/",
    mail: "k.monishwaran123@gmail.com",
    github: "https://github.com/Monishwarann",
  },
  {
    name: "Jai Ashwin R M",
    role: "Joint Secretary",
    meta: "MECH — II Year",
    phone: "9342643672",
    image: "/jai ashwin.jpg",
    linkedIn: "https://www.linkedin.com/in/jai-ashwin-r-m-0b3671306/",
    mail: "[EMAIL_ADDRESS]",
    github: "https://github.com/varul-mech"
  },
  {
    name: "Jashwin S",
    role: "Treasurer",
    meta: "MECH — III Year",
    phone: "6380705052",
    image: "/jashwin.jpeg",
    linkedIn: "https://www.linkedin.com/in/jashwin-s-6a488a29a/",
    mail: "jashwinliebart@gmail.com",
    github: "https://github.com/varul-mech"
  },
  {
    name: "Akshayan S",
    role: "Joint Treasurer",
    meta: "MECH — II Year",
    phone: "9585689708",
    image: "/akshayan.jpg",
    linkedIn: "https://www.linkedin.com/in/akshayan-s-5749a026b/",
    mail: "[EMAIL_ADDRESS]",
    github: "https://github.com/varul-mech"
  },
  {
    name: "Mahati S",
    role: "Overall Coordinator",
    meta: "MECH — II Year",
    phone: "9840712679",
    image: "/mahati.jpg",
    linkedIn: "https://www.linkedin.com/in/mahati-s-720b76299/",
    mail: "[EMAIL_ADDRESS]",
    github: "https://github.com/varul-mech"
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function MemberCard({ m, i, large = false }: { m: Member; i: number; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
      className="glass group relative overflow-hidden rounded-3xl text-center transition hover:-translate-y-1 hover:shadow-neon"
    >
      <div className="absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full bg-[var(--neon)]/15 blur-3xl transition group-hover:bg-[var(--neon)]/30" />
      <div className="relative flex flex-col h-full">
        <div className="relative aspect-square w-full overflow-hidden bg-white/5">
          {m.image ? (
            <img
              src={m.image}
              alt={m.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[var(--gradient-neon)]/10">
              <span className="font-display text-4xl font-black text-gradient">
                {initials(m.name)}
              </span>
            </div>
          )}
          <div className="absolute bottom-3 left-4 text-xs font-semibold tracking-wider text-[var(--neon-cyan)] drop-shadow-md">
            {m.meta}
          </div>
        </div>

        <div className="flex flex-col items-center p-6 text-center">
          <h3 className={`font-display font-bold ${large ? "text-xl" : "text-lg"}`}>
            {m.name}
          </h3>
          <div className="mt-2 inline-block rounded-full bg-violet-950/45 border border-violet-800/30 px-3 py-1 text-xs font-semibold text-violet-300">
            {m.role}
          </div>

          <a
            href={`tel:${m.phone}`}
            className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-[var(--neon-cyan)] transition"
          >
            <Phone className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
            {m.phone}
          </a>

          <div className="mt-4 flex items-center justify-center gap-2">
            {m.linkedIn && (
              <a
                href={m.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {m.github && (
              <a
                href={m.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {m.mail && (
              <a
                href={m.mail.startsWith("mailto:") ? m.mail : `mailto:${m.mail}`}
                className="grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon"
                aria-label="Email Contact"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="team" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="The Team"
          title={<>Meet Our <span className="text-gradient">Executives</span></>}
          description="Builders, organizers, and engineers driving the Robotics Club mission forward."
        />

        <div className="mt-14 grid place-items-center">
          <div className="w-full max-w-md">
            <MemberCard m={advisor} i={0} large />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
