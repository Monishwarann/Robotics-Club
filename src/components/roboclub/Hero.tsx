import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import { Counter } from "./Counter";
import { Card3D } from "./Card3D";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-neon inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--neon-cyan)] shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            Engineering the Future 
          </motion.div>

          {/* Official Club Logo with 3D Floating & Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.04, 1],
              y: [-8, 8, -8],
              rotateY: [-10, 10, -10],
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.15 },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="relative my-6 flex items-center justify-center group cursor-pointer"
          >
            {/* Glowing Ambient Halo */}
            <div className="absolute inset-0 rounded-full bg-[var(--neon-cyan)]/25 blur-2xl transition duration-500 group-hover:bg-[var(--neon-cyan)]/45 group-hover:scale-110" />

            <img
              src="/logo.png"
              alt="Robotics & Drones Club Logo"
              className="relative z-10 h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover shadow-[0_0_35px_rgba(0,229,255,0.5)] border border-[var(--neon-cyan)]/40 transition duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-wider whitespace-nowrap text-white"
          >
            ROBOTICS <span className="text-[var(--neon-cyan)] drop-shadow-[0_0_25px_rgba(0,229,255,0.7)]">& DRONES CLUB</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display mt-4 text-sm sm:text-base md:text-lg tracking-[0.35em] text-[var(--neon-cyan)] drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
          >
            MSEC • BUILD-FIRST ROBOTICS COMMUNITY
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg mx-auto"
          >
            Engineering depth over superficial concepts. We build autonomous drones, 
            intelligent robotics, and real-world embedded systems.
          </motion.p>

          {/* Action CTAs — Linear Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#about"
              className="glass inline-flex items-center justify-center rounded-xl px-6 sm:px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-white/10 hover:border-[var(--neon-cyan)]/60 hover:text-[var(--neon-cyan)] hover:-translate-y-1 hover:shadow-neon"
            >
              About
            </a>
            <a
              href="#team"
              className="group relative inline-flex items-center justify-center rounded-xl bg-[var(--gradient-neon)] px-6 sm:px-7 py-3 text-sm font-semibold text-white shadow-neon transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:shadow-[0_0_30px_rgba(0,229,255,0.7)]"
            >
              Executives
            </a>
            <a
              href="#events"
              className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-7 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-[var(--neon-cyan)]/60 hover:-translate-y-1 hover:shadow-neon"
            >
              <Calendar className="h-4 w-4 text-[var(--neon-cyan)]" />
              View Events
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-xl bg-[var(--gradient-neon)] px-6 sm:px-7 py-3 text-sm font-semibold text-white shadow-neon transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:shadow-[0_0_30px_rgba(0,229,255,0.7)]"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats Cards with 3D Tilt */}
          <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl mx-auto">
            {[
              { n: 6, l: "Planned Events" },
              { n: 8, l: "Executive Members" },
              { n: 12, l: "Core Objectives" },
            ].map((s, i) => (
              <Card3D key={s.l} intensity={12}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="glass group rounded-2xl p-5 text-center transition border border-white/10 hover:border-[var(--neon-cyan)]/40 hover:shadow-neon"
                >
                  <div className="font-display text-3xl font-black text-gradient sm:text-4xl">
                    <Counter to={s.n} />+
                  </div>
                  <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-[var(--neon-cyan)] transition">
                    {s.l}
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
