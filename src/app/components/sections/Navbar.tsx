import { ReactNode } from "react";
import AboutIcon from "../icons/About";
import ExpeerienceIcon from "../icons/Experience";
import HouseIcon from "../icons/Home";
import ProjectIcon from "../icons/Project";
import SkillIcon from "../icons/Skill";
import { hover, motion, Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15, // jeda antar icon
      delayChildren: 0.2,    // delay sebelum mulai animasi
    },
  },
};

const item : Variants= {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
  hover: { scale: 1.3, skewX: -4, transition: {type: "spring", ease: "easeInOut"} }
};

const Navbar = () => {
    return (<nav className="flex flex-col fixed left-0 top-1/2 -translate-y-1/2">
        <motion.div  variants={container} initial={"hidden"} animate="show" className="flex flex-col items-center gap-8 pe-4 ps-3 py-6 bg-background/70 backdrop-blur-md rounded-tr-2xl rounded-br-2xl border border-foreground/10">
            <HouseIcon variants={item} whileHover="hover" className="size-6 text-foreground transition-colors cursor-pointer" />
            <AboutIcon variants={item} whileHover="hover" className="size-6 text-foreground hover:text-accent transition-colors cursor-pointer" />
            <SkillIcon variants={item} whileHover="hover" className="size-6 text-foreground hover:text-accent transition-colors cursor-pointer" />
            <ProjectIcon variants={item} whileHover="hover" className="size-6 text-foreground hover:text-accent transition-colors cursor-pointer" />
            <ExpeerienceIcon variants={item} whileHover="hover" className="size-6 -rotate-90 text-foreground hover:text-accent transition-colors cursor-pointer" />
        </motion.div>
    </nav>);
}

export default Navbar;