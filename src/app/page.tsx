"use client"
import { useEffect } from "react";
import { AboutSection, SplitSection } from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import Lenis from "lenis";
import SocialMediaNav from "./components/sections/SocialNavbar";
import Navbar from "./components/sections/Navbar";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div className="font-sans flex flex-col">
      <main className="flex flex-col">
        <HeroSection />
        <SocialMediaNav />
        <Navbar />
      </main>
    </div>
  );
}
