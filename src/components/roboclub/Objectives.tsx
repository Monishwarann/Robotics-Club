import { motion } from "framer-motion";
import {
  GitBranch, Wrench, Users, Lightbulb, FileCode, Bug,
  Trophy, Cpu, GraduationCap, Zap, BarChart3, BookOpen,
} from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: GitBranch, t: "Learning Pipeline", d: "Implement a structured learning-to-building pipeline with mandatory deliverables at each level." },
  { icon: Wrench, t: "Build Every Semester", d: "Ensure every member completes at least one functional robotics project per semester." },
  { icon: Users, t: "Project Team System", d: "Establish a project-based team system simulating real-world engineering practices." },
  { icon: Lightbulb, t: "Problem Solving", d: "Develop a problem-solving culture with real-world problem statements for campus and industry." },
  { icon: FileCode, t: "Docs & Git", d: "Mandate technical documentation and version control using GitHub." },
  { icon: Bug, t: "Design Reviews", d: "Conduct regular design reviews and debugging sessions with structured feedback." },
  { icon: Trophy, t: "Competitions", d: "Facilitate participation in minimum 3 national-level competitions annually." },
  { icon: Cpu, t: "Advanced Tools", d: "Introduce advanced tools like ROS, Computer Vision, AI, and Automation Systems." },
  { icon: GraduationCap, t: "Peer Mentorship", d: "Establish a peer mentorship model with hands-on support and project supervision." },
  { icon: Zap, t: "Build Sprints", d: "Organize internal technical challenges and rapid build sprints." },
  { icon: BarChart3, t: "Performance Metrics", d: "Track performance using technical metrics such as prototypes, completion rate, and contributions." },
  { icon: BookOpen, t: "Knowledge Ecosystem", d: "Create a sustainable knowledge ecosystem passed on to future members." },
];

export function Objectives() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Roadmap"
          title={<>12 <span className="text-gradient">Objectives</span></>}
          description="A clear, executable framework for building the next generation of robotics engineers."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-neon"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl glass-neon text-[var(--neon-cyan)] transition group-hover:bg-[var(--gradient-neon)] group-hover:text-white">
                  <it.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xs text-[var(--neon-cyan)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold">{it.t}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
