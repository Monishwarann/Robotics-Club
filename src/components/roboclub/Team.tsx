import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Shield, UserCheck, Award, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "./Section";
import { Card3D } from "./Card3D";

type Member = {
  name: string;
  role: string;
  meta: string;
  phone?: string;
  image?: string;
  linkedIn?: string;
  github?: string;
  mail?: string;
  badgeTitle?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};

const facultyAdvisors: Member[] = [
  {
    name: "Dr. M. THIYAGU",
    role: "Faculty Advisor & Club Incharge",
    meta: "Faculty Advisor",
    phone: "9600137609",
    image: "/incharge1.png",
    badgeTitle: "Faculty Lead",
  },
  {
    name: "DR. R. MAHALAKSHMI",
    role: "Faculty Advisor & Club Mentor",
    meta: "Faculty Mentor",
    phone: "8015761669",
    image: "/incharge2.png",
    badgeTitle: "Faculty Lead",
  },
];

const executiveBoard: Member[] = [
  {
    name: "KS VIGNESH",
    role: "President",
    meta: "EEE — III Year",
    phone: "9342710667",
    image: "/president.jpeg",
  },
  {
    name: "SANTHOSH KUMAR M",
    role: "Vice President",
    meta: "MECH — III Year",
    phone: "7305422329",
    image: "/santhosh.jpg",
  },
  {
    name: "MONISHWARAN K",
    role: "Secretary",
    meta: "MECH — III Year",
    phone: "7358996358",
    image: "/monishwaran.jpg",
  },
  {
    name: "SAI BALAJI BS",
    role: "Joint Secretary",
    meta: "EEE — III Year",
    phone: "93818 02034",
    image: "/sai 1.png",
  },
  {
    name: "JASHWIN S",
    role: "Treasurer",
    meta: "MECH — III Year",
    phone: "6380705052",
    image: "/jaswin.png",
  },
  {
    name: "KIRTI R",
    role: "Joint Treasurer",
    meta: "EEE — III Year",
    phone: "81481 86421",
    image: "/Joint-Treasurer.jpeg",
  },
];

const executiveMembers: Member[] = [
    {
    name: "JAI ASHWIN R M",
    role: "Executive Member",
    meta: "MECH — II Year",
    image: "/Executive member/jaiashwin.png",
    imagePosition: "object-top",
  },
   {
    name: "MOHAN KUMAR B",
    role: "Executive Member",
    meta: "MECH — II Year",
    image: "/Executive member/mohan.png",
    imagePosition: "object-top",
  },  {
    name: "AKSHAYAN S",
    role: "Executive Member",
    meta: "MECH — II Year",
    image: "/Executive member/image.png",
    imagePosition: "object-center",

  },
  {
    name: "SABARINE S",
    role: "Executive Member",
    meta: "EEE — III Year",
    image: "/Executive member/Sabarine S.png",
    imagePosition: "object-top",
  },
  {
    name: "GIRISH KUMAR",
    role: "Executive Member",
    meta: "EEE — II Year",
    image: "/Executive member/girish kumar.png",
    imagePosition: "object-top",
  },
  {
    name: "VARSHA SHREE P",
    role: "Executive Member",
    meta: "EEE — II Year",
    image: "/Executive member/varsha shree P.png",
    imagePosition: "object-center",
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

function ExecutiveMemberCard({ m, i, isFaculty = false }: { m: Member; i: number; isFaculty?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Card3D intensity={isFaculty ? 10 : 16}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
        className={`glass group relative overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 border ${
          isFaculty
            ? "border-violet-500/40 bg-gradient-to-b from-violet-950/20 to-slate-950/60 shadow-[0_0_30px_rgba(138,43,226,0.25)]"
            : "border-cyan-500/30 bg-gradient-to-b from-slate-900/40 to-slate-950/70 hover:border-[var(--neon-cyan)] hover:shadow-neon"
        }`}
      >
        {/* Ambient Top Light Beam */}
        <div
          className={`absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full blur-3xl transition duration-500 ${
            isFaculty ? "bg-violet-600/30 group-hover:bg-violet-500/50" : "bg-[var(--neon-cyan)]/20 group-hover:bg-[var(--neon-cyan)]/40"
          }`}
        />

        <div className="relative flex flex-col h-full z-10">
          {/* Avatar Image Container */}
          <div className="relative aspect-square w-full overflow-hidden bg-slate-950/80">
            {m.image && !imgError ? (
              <img
                src={m.image}
                alt={m.name}
                onError={() => setImgError(true)}
                className={`h-full w-full ${m.imageFit === "contain" ? "object-contain p-2" : "object-cover"} ${m.imagePosition || "object-top"} transition duration-700 group-hover:scale-105`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-900/30 to-cyan-900/30">
                <span className="font-display text-4xl font-black text-gradient drop-shadow-neon">
                  {initials(m.name)}
                </span>
              </div>
            )}

            {/* Top Right Cyber Badge */}
            {m.badgeTitle && (
              <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 px-3 py-1 text-[10px] font-semibold tracking-wider text-[var(--neon-cyan)] shadow-md">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                {m.badgeTitle}
              </div>
            )}

            {/* Department Tag Overlay */}
            <div className="absolute bottom-3 left-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-cyan-300">
              {m.meta}
            </div>
          </div>

          {/* Member Details */}
          <div className="flex flex-col flex-grow items-center p-6 text-center">
            <h3 className="font-display text-xl font-bold text-white tracking-wide group-hover:text-[var(--neon-cyan)] transition-colors">
              {m.name}
            </h3>

            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-violet-950/60 border border-violet-700/50 px-3.5 py-1 text-xs font-bold text-violet-300 shadow-sm">
              <UserCheck className="h-3.5 w-3.5 text-violet-400" />
              {m.role}
            </div>

            {/* Phone Quick Call */}
            {m.phone && (
              <a
                href={m.phone.match(/\d/) ? `tel:${m.phone}` : "#team"}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900/80 border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--neon-cyan)] animate-pulse" />
                {m.phone}
              </a>
            )}

          </div>
        </div>
      </motion.div>
    </Card3D>
  );
}

export function Team() {
  return (
    <section id="team" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <SectionHeader
          eyebrow="Executive Leadership"
          title={
            <>
              Meet Our <span className="text-gradient">Executives</span>
            </>
          }
          description="Visionary leaders, faculty advisors, and core student executives driving innovation in robotics and drone engineering."
        />

        {/* Section 1: Faculty Leadership & Incharge */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
            <Shield className="h-5 w-5 text-violet-400" />
            <h3 className="font-display text-lg font-bold tracking-widest text-violet-300 uppercase">
              Faculty Leadership & Advisors
            </h3>
            <div className="h-px flex-grow bg-gradient-to-r from-violet-500/50 to-transparent hidden sm:block" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {facultyAdvisors.map((adv, idx) => (
              <ExecutiveMemberCard key={adv.name} m={adv} i={idx} isFaculty />
            ))}
          </div>
        </div>

        {/* Section 2: Officer Bearers */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
            <Award className="h-5 w-5 text-[var(--neon-cyan)]" />
            <h3 className="font-display text-lg font-bold tracking-widest text-[var(--neon-cyan)] uppercase">
              Officer Bearers
            </h3>
            <div className="h-px flex-grow bg-gradient-to-r from-[var(--neon-cyan)]/50 to-transparent hidden sm:block" />
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {executiveBoard.map((m, i) => (
              <ExecutiveMemberCard key={m.name} m={m} i={i + 1} />
            ))}
          </div>
        </div>

        {/* Section 3: Executive Members */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
            <Users className="h-5 w-5 text-[var(--neon-cyan)]" />
            <h3 className="font-display text-lg font-bold tracking-widest text-[var(--neon-cyan)] uppercase">
              Executive Members
            </h3>
            <div className="h-px flex-grow bg-gradient-to-r from-[var(--neon-cyan)]/50 to-transparent hidden sm:block" />
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {executiveMembers.map((m, i) => (
              <ExecutiveMemberCard key={m.name + i} m={m} i={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
