import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* floating orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--neon)]/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--neon-cyan)]/15 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--neon-cyan)]"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
          transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
