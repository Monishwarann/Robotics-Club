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

    // 3D Particles & Sparkles
    const particleCount = Math.min(Math.floor((width * height) / 10000), 120);
    const particles: Particle[] = [];
    const colors = ["rgba(0, 229, 255, ", "rgba(138, 43, 226, ", "rgba(0, 242, 254, ", "rgba(59, 130, 246, "];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 2.5,
        z: Math.random() * 900 + 50,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.05 + 0.01,
      });
    }

    // 3D Floating Geometries (Multiple floating 3D objects in background space)
    const shapes: Shape3D[] = [
      {
        type: "cube",
        x: -width * 0.35,
        y: -height * 0.2,
        z: 450,
        size: 90,
        rotX: 0.2,
        rotY: 0.4,
        rotZ: 0.1,
        speedX: 0.008,
        speedY: 0.012,
        speedZ: 0.005,
        color: "rgba(0, 229, 255, 0.45)",
      },
      {
        type: "octahedron",
        x: width * 0.38,
        y: -height * 0.1,
        z: 500,
        size: 110,
        rotX: 0.5,
        rotY: 0.2,
        rotZ: 0.3,
        speedX: 0.01,
        speedY: 0.007,
        speedZ: 0.006,
        color: "rgba(138, 43, 226, 0.45)",
      },
      {
        type: "tetrahedron",
        x: -width * 0.3,
        y: height * 0.6,
        z: 550,
        size: 85,
        rotX: 0.3,
        rotY: 0.6,
        rotZ: 0.2,
        speedX: 0.012,
        speedY: 0.009,
        speedZ: 0.004,
        color: "rgba(0, 242, 254, 0.4)",
      },
      {
        type: "sparkle",
        x: width * 0.28,
        y: height * 0.5,
        z: 400,
        size: 70,
        rotX: 0.1,
        rotY: 0.5,
        rotZ: 0.4,
        speedX: 0.015,
        speedY: 0.015,
        speedZ: 0.008,
        color: "rgba(0, 229, 255, 0.6)",
      },
      {
        type: "sparkle",
        x: -width * 0.15,
        y: height * 1.2,
        z: 480,
        size: 75,
        rotX: 0.4,
        rotY: 0.3,
        rotZ: 0.5,
        speedX: 0.011,
        speedY: 0.013,
        speedZ: 0.007,
        color: "rgba(138, 43, 226, 0.55)",
      },
      {
        type: "cube",
        x: width * 0.3,
        y: height * 1.5,
        z: 520,
        size: 95,
        rotX: 0.2,
        rotY: 0.5,
        rotZ: 0.3,
        speedX: 0.009,
        speedY: 0.011,
        speedZ: 0.005,
        color: "rgba(0, 242, 254, 0.4)",
      },
    ];

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse position interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep Cyber Gradient Background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        150,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, "rgba(7, 14, 33, 0.92)");
      bgGrad.addColorStop(0.6, "rgba(5, 9, 24, 0.96)");
      bgGrad.addColorStop(1, "rgba(2, 4, 12, 0.99)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const focalLength = 450;
      const centerX = width / 2;
      const centerY = height / 2;

      const parallaxMouseX = (mouseX - centerX) * 0.04;
      const parallaxMouseY = (mouseY - centerY) * 0.04;
      const parallaxScroll = scrollY * 0.15;

      // Render 3D Floating Particles & Constellation Links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height * 1.5) p.y = height * 1.5;
        if (p.y > height * 1.5) p.y = -height * 1.5;
        if (p.z < 40) p.z = 900;
        if (p.z > 950) p.z = 40;

        const scale = focalLength / (p.z + focalLength);
        const projX = (p.x + parallaxMouseX) * scale + centerX;
        const projY = (p.y + parallaxMouseY - parallaxScroll * 0.5) * scale + centerY;

        const alpha = (Math.sin(time * p.pulseSpeed * 10 + i) * 0.3 + 0.7) * Math.min(1, Math.max(0.1, 1 - p.z / 950));

        // Draw particle node with light aura
        ctx.beginPath();
        ctx.arc(projX, projY, p.size * scale * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0, 229, 255, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with laser links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y, p.z - p2.z);

          if (dist < 170) {
            const scale2 = focalLength / (p2.z + focalLength);
            const projX2 = (p2.x + parallaxMouseX) * scale2 + centerX;
            const projY2 = (p2.y + parallaxMouseY - parallaxScroll * 0.5) * scale2 + centerY;

            const lineAlpha = (1 - dist / 170) * 0.22 * alpha;
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
        // Rotate around X
        let y1 = vy * Math.cos(s.rotX) - vz * Math.sin(s.rotX);
        let z1 = vy * Math.sin(s.rotX) + vz * Math.cos(s.rotX);
        let x1 = vx;

        // Rotate around Y
        let x2 = x1 * Math.cos(s.rotY) + z1 * Math.sin(s.rotY);
        let z2 = -x1 * Math.sin(s.rotY) + z1 * Math.cos(s.rotY);
        let y2 = y1;

        // Rotate around Z
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

      // Render 3D Floating Geometric Objects
      shapes.forEach((s) => {
        s.rotX += s.speedX;
        s.rotY += s.speedY;
        s.rotZ += s.speedZ;

        const r = s.size;

        if (s.type === "cube") {
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
        } else if (s.type === "sparkle") {
          // 4-Pointed 3D Sparkle Star
          const vertices = [
            [0, -r * 1.4, 0], [r * 0.4, 0, 0], [0, r * 1.4, 0], [-r * 0.4, 0, 0],
            [0, 0, r * 0.4],  [0, 0, -r * 0.4]
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
          ctx.lineWidth = 1.8 * projected[0][2];
          ctx.shadowBlur = 25;
          ctx.shadowColor = s.color;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Draw Glowing Center Core Orb
          const centerProj = project3D(0, 0, 0, s);
          ctx.beginPath();
          ctx.arc(centerProj[0], centerProj[1], 8 * centerProj[2], 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.shadowBlur = 20;
          ctx.shadowColor = s.color;
          ctx.fill();
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
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050814]">
      {/* 3D WebGL Canvas Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />

      {/* Dynamic Glowing Ambient Light Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[var(--neon-cyan)]/20 blur-[130px]"
        animate={{ x: [0, 90, 0], y: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-violet-600/20 blur-[150px]"
        animate={{ x: [0, -90, 0], y: [0, -70, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-[130px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Scan Laser Line */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-cyan)]/10 to-transparent h-2 w-full animate-scan opacity-70" />
    </div>
  );
}
