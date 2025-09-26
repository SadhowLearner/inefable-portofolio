import { motion, Variants, MotionValue, useTransform, stagger } from "framer-motion";
import ReactIcon from "../icons/skills/React";
import GolangIcon from "../icons/skills/Golang";
import LaravelIcon from "../icons/skills/Laravel";
import TailwindIcon from "../icons/skills/Tailwind";
import LearningIcon from "../icons/skills/Learning";
import { HTMLProps } from "react";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            type: "tween",
            stiffness: 100,

            delayChildren: stagger(0.3),
        },
    },
}

const item: Variants = {
    hidden: { y: 700 },
    show: { y: 0, transition: { type: "spring", delayChildren: 1} }
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
        y: -30,
        transition: { repeat: Infinity, duration: 3, ease: "backInOut", type: "tween", repeatType: "reverse" }
    },
    hidden: {
        y: 10,
    }
}


const HeroSection = ({scrollYProgress ,...rest}: {scrollYProgress: MotionValue} & HTMLProps<HTMLDivElement> ) => {

    const scale = useTransform(scrollYProgress, [0,1], [1, 0.8])
    return (
        <motion.section style={{scale}} id="hero" className="flex sticky min-h-[100dvh] w-full py-32 h-[100dvh] px-32 top-0 left-0">
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
        </motion.section>
    )
}

export default HeroSection;