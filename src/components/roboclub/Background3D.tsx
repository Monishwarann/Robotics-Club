import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  pulseSpeed: number;
  isSparkle?: boolean;
}

interface Shape3D {
  type: "cube" | "octahedron" | "tetrahedron" | "sparkle";
  x: number;
  y: number;
  z: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  color: string;
}

export function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates & scroll tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Dynamic Moving Blue Sparkles & 3D Particles
    const particleCount = Math.min(Math.floor((width * height) / 7000), 180);
    const particles: Particle[] = [];
    const blueColors = [
      "rgba(0, 229, 255, ",
      "rgba(0, 162, 255, ",
      "rgba(0, 242, 254, ",
      "rgba(30, 144, 255, ",
      "rgba(138, 43, 226, ",
    ];

    for (let i = 0; i < particleCount; i++) {
      const isSparkle = i % 3 === 0;
      particles.push({
        x: (Math.random() - 0.5) * width * 2.2,
        y: (Math.random() - 0.5) * height * 3,
        z: Math.random() * 950 + 30,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.4), // Continuous upward movement
        vz: (Math.random() - 0.5) * 0.4,
        size: isSparkle ? Math.random() * 4.5 + 2.5 : Math.random() * 2 + 1,
        color: blueColors[Math.floor(Math.random() * blueColors.length)],
        pulseSpeed: Math.random() * 0.08 + 0.03,
        isSparkle,
      });
    }

    // 3D Floating Geometries & Sparkle Stars
    const shapes: Shape3D[] = [
      {
        type: "sparkle",
        x: -width * 0.38,
        y: -height * 0.3,
        z: 380,
        size: 85,
        rotX: 0.2,
        rotY: 0.5,
        rotZ: 0.2,
        speedX: 0.012,
        speedY: 0.015,
        speedZ: 0.006,
        color: "rgba(0, 229, 255, 0.75)",
      },
      {
        type: "cube",
        x: width * 0.35,
        y: -height * 0.15,
        z: 480,
        size: 95,
        rotX: 0.3,
        rotY: 0.4,
        rotZ: 0.1,
        speedX: 0.009,
        speedY: 0.011,
        speedZ: 0.005,
        color: "rgba(0, 162, 255, 0.5)",
      },
      {
        type: "sparkle",
        x: width * 0.32,
        y: height * 0.4,
        z: 420,
        size: 90,
        rotX: 0.4,
        rotY: 0.6,
        rotZ: 0.3,
        speedX: 0.014,
        speedY: 0.016,
        speedZ: 0.007,
        color: "rgba(0, 242, 254, 0.7)",
      },
      {
        type: "octahedron",
        x: -width * 0.32,
        y: height * 0.65,
        z: 520,
        size: 105,
        rotX: 0.5,
        rotY: 0.3,
        rotZ: 0.2,
        speedX: 0.01,
        speedY: 0.008,
        speedZ: 0.005,
        color: "rgba(138, 43, 226, 0.5)",
      },
      {
        type: "sparkle",
        x: -width * 0.2,
        y: height * 1.3,
        z: 450,
        size: 80,
        rotX: 0.3,
        rotY: 0.4,
        rotZ: 0.5,
        speedX: 0.013,
        speedY: 0.014,
        speedZ: 0.006,
        color: "rgba(30, 144, 255, 0.7)",
      },
      {
        type: "sparkle",
        x: width * 0.28,
        y: height * 1.6,
        z: 490,
        size: 85,
        rotX: 0.2,
        rotY: 0.5,
        rotZ: 0.4,
        speedX: 0.011,
        speedY: 0.012,
        speedZ: 0.006,
        color: "rgba(0, 229, 255, 0.65)",
      },
    ];

    let time = 0;

    const render = () => {
      time += 0.025;

      // Smooth mouse position interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep Blue Cyber Radial Background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        120,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, "rgba(5, 12, 32, 0.94)");
      bgGrad.addColorStop(0.5, "rgba(3, 8, 22, 0.97)");
      bgGrad.addColorStop(1, "rgba(2, 4, 12, 0.99)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const focalLength = 450;
      const centerX = width / 2;
      const centerY = height / 2;

      const parallaxMouseX = (mouseX - centerX) * 0.045;
      const parallaxMouseY = (mouseY - centerY) * 0.045;
      const parallaxScroll = scrollY * 0.15;

      // Render Moving Blue Sparkles & 3D Floating Ember Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Continuous Upward & Wave Motion Physics
        p.y += p.vy; // Rise upwards
        p.x += p.vx + Math.sin(time * 0.8 + i) * 0.4; // Sway horizontally
        p.z += p.vz;

        // Wrap around boundaries seamlessly
        if (p.y < -height * 1.5) p.y = height * 1.5;
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.z < 30) p.z = 950;
        if (p.z > 980) p.z = 30;

        const scale = focalLength / (p.z + focalLength);
        const projX = (p.x + parallaxMouseX) * scale + centerX;
        const projY = (p.y + parallaxMouseY - parallaxScroll * 0.5) * scale + centerY;

        const alpha = (Math.sin(time * p.pulseSpeed * 12 + i) * 0.35 + 0.65) * Math.min(1, Math.max(0.1, 1 - p.z / 980));

        if (p.isSparkle) {
          // Draw Animated 4-pointed Blue Diamond Sparkle Star
          const spSize = (p.size + Math.sin(time * 3 + i) * 0.8) * scale * 2.2;
          ctx.save();
          ctx.translate(projX, projY);
          ctx.rotate(time * 0.5 + i);

          ctx.beginPath();
          ctx.moveTo(0, -spSize);
          ctx.lineTo(spSize * 0.35, 0);
          ctx.lineTo(0, spSize);
          ctx.lineTo(-spSize * 0.35, 0);
          ctx.closePath();

          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.shadowBlur = 20;
          ctx.shadowColor = "rgba(0, 229, 255, 0.95)";
          ctx.fill();
          ctx.restore();
        } else {
          // Draw Glowing Particle Node
          ctx.beginPath();
          ctx.arc(projX, projY, p.size * scale * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(0, 229, 255, 0.7)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Connect nearby particles with electric blue laser links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y, p.z - p2.z);

          if (dist < 150) {
            const scale2 = focalLength / (p2.z + focalLength);
            const projX2 = (p2.x + parallaxMouseX) * scale2 + centerX;
            const projY2 = (p2.y + parallaxMouseY - parallaxScroll * 0.5) * scale2 + centerY;

            const lineAlpha = (1 - dist / 150) * 0.2 * alpha;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projX2, projY2);
            ctx.strokeStyle = `rgba(0, 229, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * scale;
            ctx.stroke();
          }
        }
      }

      // Helper function to project 3D point to 2D screen space
      const project3D = (
        vx: number,
        vy: number,
        vz: number,
        s: Shape3D
      ): [number, number, number] => {
        let y1 = vy * Math.cos(s.rotX) - vz * Math.sin(s.rotX);
        let z1 = vy * Math.sin(s.rotX) + vz * Math.cos(s.rotX);
        let x1 = vx;

        let x2 = x1 * Math.cos(s.rotY) + z1 * Math.sin(s.rotY);
        let z2 = -x1 * Math.sin(s.rotY) + z1 * Math.cos(s.rotY);
        let y2 = y1;

        let x3 = x2 * Math.cos(s.rotZ) - y2 * Math.sin(s.rotZ);
        let y3 = x2 * Math.sin(s.rotZ) + y2 * Math.cos(s.rotZ);
        let z3 = z2;

        const worldX = s.x + x3 + parallaxMouseX * 1.5;
        const worldY = s.y + y3 + parallaxMouseY * 1.5 - parallaxScroll;
        const worldZ = s.z + z3;

        const scale = focalLength / (worldZ + focalLength);
        const px = worldX * scale + centerX;
        const py = worldY * scale + centerY;

        return [px, py, scale];
      };

      // Render 3D Floating Shapes & Blue Sparkle Stars
      shapes.forEach((s) => {
        s.rotX += s.speedX;
        s.rotY += s.speedY;
        s.rotZ += s.speedZ;

        const r = s.size;

        if (s.type === "sparkle") {
          // 4-Pointed 3D Blue Diamond Sparkle Star
          const vertices = [
            [0, -r * 1.5, 0], [r * 0.45, 0, 0], [0, r * 1.5, 0], [-r * 0.45, 0, 0],
            [0, 0, r * 0.45], [0, 0, -r * 0.45]
          ];
          const edges = [
            [0,1],[1,2],[2,3],[3,0],
            [0,4],[2,4],[1,4],[3,4],
            [0,5],[2,5],[1,5],[3,5]
          ];
          const projected = vertices.map(([x, y, z]) => project3D(x, y, z, s));

          ctx.beginPath();
          edges.forEach(([v1, v2]) => {
            ctx.moveTo(projected[v1][0], projected[v1][1]);
            ctx.lineTo(projected[v2][0], projected[v2][1]);
          });
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 1.9 * projected[0][2];
          ctx.shadowBlur = 28;
          ctx.shadowColor = s.color;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Glowing Blue Center Core Orb
          const centerProj = project3D(0, 0, 0, s);
          ctx.beginPath();
          ctx.arc(centerProj[0], centerProj[1], 9 * centerProj[2], 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.shadowBlur = 24;
          ctx.shadowColor = s.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (s.type === "cube") {
          const vertices = [
            [-r, -r, -r], [r, -r, -r], [r, r, -r], [-r, r, -r],
            [-r, -r, r],  [r, -r, r],  [r, r, r],  [-r, r, r],
          ];
          const edges = [
            [0,1],[1,2],[2,3],[3,0],
            [4,5],[5,6],[6,7],[7,4],
            [0,4],[1,5],[2,6],[3,7]
          ];
          const projected = vertices.map(([x, y, z]) => project3D(x, y, z, s));

          ctx.beginPath();
          edges.forEach(([v1, v2]) => {
            ctx.moveTo(projected[v1][0], projected[v1][1]);
            ctx.lineTo(projected[v2][0], projected[v2][1]);
          });
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 1.5 * projected[0][2];
          ctx.shadowBlur = 18;
          ctx.shadowColor = s.color;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else if (s.type === "octahedron") {
          const vertices = [
            [0, -r * 1.3, 0], [r, 0, 0], [0, 0, r],
            [-r, 0, 0],       [0, 0, -r], [0, r * 1.3, 0],
          ];
          const edges = [
            [0,1],[0,2],[0,3],[0,4],
            [5,1],[5,2],[5,3],[5,4],
            [1,2],[2,3],[3,4],[4,1]
          ];
          const projected = vertices.map(([x, y, z]) => project3D(x, y, z, s));

          ctx.beginPath();
          edges.forEach(([v1, v2]) => {
            ctx.moveTo(projected[v1][0], projected[v1][1]);
            ctx.lineTo(projected[v2][0], projected[v2][1]);
          });
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 1.6 * projected[0][2];
          ctx.shadowBlur = 20;
          ctx.shadowColor = s.color;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#040816]">
      {/* 3D WebGL Canvas Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />

      {/* Dynamic Electric Blue Glowing Ambient Light Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-[var(--neon-cyan)]/25 blur-[140px]"
        animate={{ x: [0, 100, 0], y: [0, 70, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[42rem] w-[42rem] rounded-full bg-blue-600/25 blur-[160px]"
        animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 h-[34rem] w-[34rem] rounded-full bg-cyan-400/20 blur-[140px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Scan Laser Line */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-cyan)]/15 to-transparent h-2 w-full animate-scan opacity-80" />
    </div>
  );
}
