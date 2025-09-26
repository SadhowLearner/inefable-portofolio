"use client"
import { useEffect, useRef } from "react";
import { AboutSection, SplitSection } from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import Lenis from "lenis";
import SocialMediaNav from "./components/sections/SocialNavbar";
import Navbar from "./components/sections/Navbar";
import { useScroll } from "motion/react";


export default function Home() {
 
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });



  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
      <main ref={container}  className="flex flex-col h-[200dvh] relative">
        <HeroSection scrollYProgress={scrollYProgress} />
        <AboutSection/>
        <SocialMediaNav />
        <Navbar />
      </main>

  );
}
