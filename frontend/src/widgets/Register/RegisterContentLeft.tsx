"use client";
import GoogleParticleEffect from "../../components/animation/particles";

export default function RegisterContentLeft() {
  return (
    <div className="relative hidden w-1/2 p-8 lg:block">
      <div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-[#150e41] via-[#0c073b] to-black relative">
        {/* Particle Effect Layer */}
        <div className="absolute inset-0 z-10">
          <GoogleParticleEffect />
        </div>
      </div>
    </div>
  );
}
