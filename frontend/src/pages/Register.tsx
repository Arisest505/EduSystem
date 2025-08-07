"use client";
import { useState, useEffect } from "react";
import RegisterContentLeft from "../widgets/Register/RegisterContentLeft";
import RegisterContentRight from "../widgets/Register/RegisterContentRight";
import GoogleParticleEffect from "../components/animation/particles";

export default function PageRegister() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showLeftPanel = screenWidth >= 1125;
  const showBackgroundEffect = screenWidth > 0 && screenWidth < 1125;

  return (
    <div className="flex min-h-screen bg-black relative">
      {showBackgroundEffect && (
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-[#150e41] via-[#0c073b] to-black">
            <GoogleParticleEffect isBackground={true} />
          </div>
        </div>
      )}
      {showLeftPanel && <RegisterContentLeft />}
      <RegisterContentRight showLeftPanel={showLeftPanel} />
    </div>
  );
}
