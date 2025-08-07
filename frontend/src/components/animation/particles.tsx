"use client";

import { useRef, useEffect, useState } from "react";
import { EDUSYSTEM_LOGO_PATH } from "../../assets/EDUSYSTEM_LOGO_PATH";

interface GoogleParticleEffectProps {
  isCompact?: boolean;
  isBackground?: boolean;
  size?: number;
}

export default function GoogleParticleEffect({
  isCompact = false,
  isBackground = false,
  size,
}: GoogleParticleEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isTouchingRef = useRef(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      setScreenWidth(window.innerWidth);
    };

    updateCanvasSize();

    let particles: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      scatteredColor: string;
      life: number;
    }[] = [];
    let textImageData: ImageData | null = null;

    function getLogoSize() {
      if (size) {
        return size;
      }
      if (isBackground) {
        const isMobile = screenWidth < 768;
        return isMobile ? 120 : 200;
      }
      if (isCompact) {
        if (screenWidth <= 575) {
          return 175;
        } else {
          return 275;
        }
      }
      return 800;
    }

    function createTextImage() {
      if (!ctx || !canvas) return 0;

      ctx.fillStyle = "white";
      ctx.save();

      const logoSize = getLogoSize();
      const logoWidth = logoSize;
      const logoHeight = logoSize;

      // Centrar el logo
      ctx.translate(
        canvas.width / 2 - logoWidth / 2 + 100,
        canvas.height / 2 - logoHeight / 2 + 100
      );

      const scale = logoSize / 544.3;
      ctx.scale(scale, scale);

      const path = new Path2D(EDUSYSTEM_LOGO_PATH);
      ctx.fill(path);
      ctx.restore();

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      return scale;
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null;

      const data = textImageData.data;
      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.8,
            color: "rgba(255, 255, 255, 0.7)",
            scatteredColor: "#4285F4",
            life: Math.random() * 100 + 50,
          };
        }
      }
      return null;
    }

    function createInitialParticles(scale: number) {
      let baseParticleCount = 4500;
      if (isBackground) {
        baseParticleCount = 2000;
      } else if (isCompact) {
        baseParticleCount = 2000;
      }

      const particleCount = Math.floor(
        baseParticleCount *
          Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      );

      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale);
        if (particle) particles.push(particle);
      }
    }

    let animationFrameId: number;

    function animate(scale: number) {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY } = mousePositionRef.current;
      let maxDistance = 200;
      if (isBackground) {
        maxDistance = 150;
      } else if (isCompact) {
        maxDistance = 160;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (
          distance < maxDistance &&
          (isTouchingRef.current || !("ontouchstart" in window))
        ) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          let moveForce = 50;
          if (isBackground) {
            moveForce = 40;
          } else if (isCompact) {
            moveForce = 40;
          }

          const moveX = Math.cos(angle) * force * moveForce;
          const moveY = Math.sin(angle) * force * moveForce;

          p.x = p.baseX - moveX;
          p.y = p.baseY - moveY;
          ctx.fillStyle = p.scatteredColor;
        } else {
          p.x += (p.baseX - p.x) * 0.1;
          p.y += (p.baseY - p.y) * 0.1;
          ctx.fillStyle = p.color;
        }

        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.life--;
        if (p.life <= 0) {
          const newParticle = createParticle(scale);
          if (newParticle) {
            particles[i] = newParticle;
          } else {
            particles.splice(i, 1);
            i--;
          }
        }
      }

      let baseParticleCount = 3000;
      if (isBackground) {
        baseParticleCount = 2000;
      } else if (isCompact) {
        baseParticleCount = 2000;
      }

      const targetParticleCount = Math.floor(
        baseParticleCount *
          Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      );

      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale);
        if (newParticle) particles.push(newParticle);
      }

      animationFrameId = requestAnimationFrame(() => animate(scale));
    }

    const scale = createTextImage();
    createInitialParticles(scale);
    animate(scale);

    const handleResize = () => {
      updateCanvasSize();
      const newScale = createTextImage();
      particles = [];
      createInitialParticles(newScale);
    };

    const handleMove = (x: number, y: number) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: x - rect.left,
        y: y - rect.top,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault();
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchStart = () => {
      isTouchingRef.current = true;
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;
      mousePositionRef.current = { x: 0, y: 0 };
    };

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 };
      }
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isCompact, isBackground, screenWidth, size]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0 touch-none pointer-events-auto"
      aria-label="Interactive particle effect with Google logo"
    />
  );
}
