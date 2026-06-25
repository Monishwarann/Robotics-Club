import { Code2, Cpu, Trophy, Mic, Wrench, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const events = [
  {
    icon: Code2,
    tag: "Hackathons",
    title: "Hackathons",
    desc: "Two intensive build events that push teams to design end-to-end systems under time pressure.",
    bullets: [
      "Collaborative Hackathon — interdisciplinary teamwork with another technical club.",
      "System Design Arena — full robotics architectures: hardware, software, sensors, control.",
    ],
  },
  {
    icon: Rocket,
    tag: "Flagship",
    title: "Robotics Project Expo",
    desc: "A large-scale technical exhibition showcasing fully functional robotics projects developed by students.",
    bullets: ["Flagship event of the year", "Open showcase for the campus & industry"],
  },
  {
    icon: Trophy,
    tag: "Competition",
    title: "Robotics Competitions",
    desc: "Line Follower & Autonomous Robot challenges focused on real engineering depth.",
    bullets: [
      "Sensor Integration · Control Algorithms",
      "Navigation · Obstacle Avoidance",
      "Real-Time Decision Making",
    ],
  },
  {
    icon: Mic,
    tag: "Talks",
    title: "Industry Expert Talks",
    desc: "Two technical sessions by robotics engineers and industry professionals.",
    bullets: ["Insights from working engineers", "Career & research pathways"],
  },
  {
    icon: Wrench,
    tag: "Workshops",
    title: "Hands-on Technical Workshops",
    desc: "Two practical workshops covering core hardware & system integration.",
    bullets: ["Embedded Systems · Sensors · Actuators", "IoT · System Integration"],
  },
  {
    icon: Cpu,
    tag: "Bootcamp",
    title: "Robotics Bootcamp Series",
    desc: "A multi-phase training program conducted with robotics startups and technical experts.",
    bullets: [
      "Fundamentals · Embedded Programming",
      "AI Robotics · Advanced Applications",
      "Project Development · Mentorship",
    ],
  },
];

export function Events() {
  return (
    <section id="events" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Planned Activities"
          title={<>Events & <span className="text-gradient">Programs</span></>}
          description="Six flagship initiatives engineered to forge builders, not spectators."
        />
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[var(--neon-cyan)]/20 shadow-neon" />

          <div className="space-y-12">
            {events.map((e, i) => {
              const isLeft = i % 2 === 1;
              return (
                <div
                  key={e.title}
                  className="relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-[var(--neon-cyan)] bg-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--neon-cyan)] shadow-neon z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      isLeft ? "md:pr-12 md:col-start-1" : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <motion.article
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-neon"
                    >
                      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--neon-cyan)]/10 blur-2xl transition group-hover:bg-[var(--neon-cyan)]/25" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-neon)] text-white shadow-neon">
                            <e.icon className="h-5 w-5" />
                          </span>
                          <span className="font-display text-[10px] uppercase tracking-widest text-[var(--neon-cyan)] glass-neon rounded-full px-3 py-1">
                            {e.tag}
                          </span>
                        </div>
                        <h3 className="font-display mt-5 text-xl font-bold">{e.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                        <ul className="mt-5 space-y-2">
                          {e.bullets.map((b) => (
                            <li key={b} className="flex gap-2 text-sm text-foreground/85">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-cyan)] shadow-neon" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
