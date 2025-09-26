"use client";
import { IconProps } from "@/app/types/icon.types";
import { motion, TargetAndTransition, ValueTransition,  Variants } from "framer-motion";

export const iconAnimation: Variants = {
    hidden: { scale: 1, opacity: 0 },
    show: { scale: 1.1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 9, mass: 1.5, ease: "easeIn", delay: 0.5 } },
    hover: { scale: 1.3, rotate: 30, y: 4, transition: { type: "spring", stiffness: 300, damping: 10, mass: 1, ease: "easeIn" } }
}


const IconAnimations = ({ ...rest }: IconProps & TargetAndTransition & ValueTransition) => {

    return (
        <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: rest.scale || 1.1, opacity: 1, rotate: rest.rotate || 0 }}
            transition={{
                delay: rest.delay || 0.5,
                type: "spring",
                stiffness: rest.stiffness || 200,
                damping: rest.damping || 9,
                mass: rest.mass || 1.5,
                ease: "easeIn",
            }}
            className="h-max w-max cursor-pointer">
            {rest.children}
        </motion.div>
    );
}

export default IconAnimations;