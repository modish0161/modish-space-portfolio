"use client"
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import ProjectsOne from "@/components/main/ProjectsOne";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import PulseBeam from '../components/main/PulseBeam';



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />

        {/* Add appropriate children here */}
        <div>Content or other components to be wrapped by TracingBeam</div>

        <Skills />
        <Encryption />
        <ProjectsOne />
        <PulseBeam />
      </div>
    </main>
  );
}
