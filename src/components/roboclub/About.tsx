import { Check, Target, Eye } from "lucide-react";
import { SectionHeader, FadeIn } from "./Section";
import { Card3D } from "./Card3D";

const vision = [
  "Autonomous & Aerial Systems — mastering drone flight dynamics, micro-robotics, and computer vision",
  "Execution over Theory — prioritizing real, functional hardware and autonomous drone flight code",
  "Engineering Depth — building strong mechanical, electronic, and embedded fundamentals",
  "Innovation with Purpose — solving real-world agricultural, industrial, and defense robotics challenges",
];

const mission = [
  "Build-First Culture — hands-on design, soldering, 3D printing, and drone flight testing",
  "Structured Progression — from basic microcontrollers to advanced flight controllers & AI robotics",
  "Real-World Prototyping — practical drone assembly, autonomous navigation, and IoT control",
  "Team-Based Hardware Development — collaborative engineering across multi-disciplinary technical teams",
];

function Card({
  icon: Icon,
  title,
  desc,
  points,
}: {
  icon: typeof Eye;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <Card3D intensity={14}>
      <div className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition duration-500 border border-white/10 hover:border-[var(--neon-cyan)]/50 hover:shadow-neon">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--neon)]/15 blur-2xl transition group-hover:bg-[var(--neon)]/30" />
        <div className="relative z-10">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-neon)] text-white shadow-neon transform group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="font-display mt-5 text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-muted-foreground">{desc}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--neon)]/15 text-[var(--neon-cyan)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card3D>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <SectionHeader
          eyebrow="Who We Are"
          title={<>About <span className="text-gradient">Robotics & Drones Club</span></>}
          description="Transforming passionate students into skilled robotics engineers."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <Card
              icon={Eye}
              title="Our Vision"
              desc="To transform the robotics club into a build-first engineering ecosystem where students consistently design, develop, and deploy intelligent systems that solve real-world problems."
              points={vision}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card
              icon={Target}
              title="Our Mission"
              desc="To systematically convert interested students into skilled robotics engineers through structured training, continuous building, and exposure to real-world engineering challenges."
              points={mission}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
