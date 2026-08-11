import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function Card3D({ children, className = "", intensity = 15, glare = true }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized cursor position from center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation angles
    const rotX = -mouseY * intensity * 2;
    const rotY = mouseX * intensity * 2;

    setRotateX(rotX);
    setRotateY(rotY);

    if (glare) {
      const posX = ((e.clientX - rect.left) / width) * 100;
      const posY = ((e.clientY - rect.top) / height) * 100;
      setGlarePos({ x: posX, y: posY, opacity: 0.25 });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)`,
              opacity: glarePos.opacity,
              mixBlendMode: "overlay",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
