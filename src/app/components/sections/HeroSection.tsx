import { motion, Variants } from "framer-motion";
import ReactIcon from "../icons/skills/React";
import GolangIcon from "../icons/skills/Golang";
import LaravelIcon from "../icons/skills/Laravel";
import TailwindIcon from "../icons/skills/Tailwind";
import LearningIcon from "../icons/skills/Learning";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            type: "tween",
            stiffness: 100,

            staggerChildren: 0.3,
            delayChildren: 1,
        },
    },
}

const item: Variants = {
    hidden: { y: 700 },
    show: { y: 0, transition: { type: "spring" , delayChildren: 2} }
}

const spinning: Variants = {
    show : {
        rotate: 360,
        transition: { repeat: Infinity, duration: 5, ease: "linear"}
    },
    hidden: {
        rotate: 0,
    }
}

const idle: Variants = {
    show : {
        y: -15,
        transition: { repeat: Infinity, duration: 2.8, ease: "easeIn", type: "tween", repeatType: "reverse" }
    },
    hidden: {
        y: 10,
    }
}


const HeroSection = () => {

    
    return (
        <section id="hero" className="flex min-h-[100dvh] w-full -z-10 py-32 h-[88dvh] px-32 sticky top-0 right-0">
            <article className="space-y-8">
                <h1>Hello, I'm Edu</h1>
                <p>Lets see what you want to know</p>
            </article>
            <motion.div variants={container} initial="hidden" animate="show" className="w-[80vw] gap-8 overflow-hidden h-[100dvh] absolute bottom-0 right-0 flex flex-row-reverse justify-end items-end bg-transparent">
                <motion.div variants={item} className="w-1/5 bg-foreground flex justify-center h-[50%]">
                    <LearningIcon  variants={idle} className="size-20 ms-3 mb-5 text-foreground -translate-y-30"/>
                </motion.div>
                <motion.div variants={item} className="w-1/5 bg-foreground flex justify-center h-[40%]">
                    <TailwindIcon variants={idle} className="size-34 ms-8 mb-5 -translate-y-30"/>
                </motion.div>
                <motion.div variants={item} className="w-1/5 bg-foreground flex justify-center h-[30%]">
                    <LaravelIcon variants={idle} className="size-23 ms-3 mb-26 -translate-y-30" />
                </motion.div>
                <motion.div variants={item} className="w-1/5 bg-foreground flex justify-center h-[20%]">
                    <GolangIcon className="h-28 w-30 ms-2 mt-3 -translate-y-34" variants={idle} />
                </motion.div>
                <motion.div variants={item} className="w-1/5 bg-foreground flex justify-center h-[10%]">
                    <motion.div variants={idle} className="flex justify-center">
                        <ReactIcon className="size-24 -translate-y-30" variants={spinning} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HeroSection;