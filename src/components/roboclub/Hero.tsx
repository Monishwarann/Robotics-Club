import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-neon inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--neon-cyan)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Engineering the Future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-6 text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl"
          >
            ROBOTICS
            <br />
            <span className="text-gradient">CLUB</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-display mt-4 text-lg tracking-[0.4em] text-[var(--neon-cyan)]"
          >
            BUILD · INNOVATE · ENGINEER
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg mx-auto"
          >
            A build-first engineering ecosystem where students consistently design,
            develop, and deploy intelligent systems that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-6 py-3 text-sm font-semibold text-white shadow-neon transition hover:scale-105"
            >
              Explore More
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#events"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              <Calendar className="h-4 w-4" />
              View Events
            </a>
          </motion.div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl mx-auto">
            {[
              { n: 6, l: "Planned Events" },
              { n: 7, l: "Core Executives" },
              { n: 12, l: "Objectives" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-4 text-center"
              >
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  <Counter to={s.n} />+
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
