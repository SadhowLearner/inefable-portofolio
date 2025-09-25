import { twMerge } from "tailwind-merge";
import DiscordIcon from "./Discord";
import GithubIcon from "./Github";
import InstagramIcon from "./Instagram";
import LinkedInIcon from "./LinkedIn";
import IconAnimation from "../../animations/IconAnimation";
import { motion } from "framer-motion";
import { IconProps } from "@/app/types/icon.types";

const SocialMedia = ({direction = "vertical", ...rest}: {direction: "horizontal" | "vertical"} & IconProps) => {
    

    return (
        <motion.div initial={{gap: "2rem"}}  animate={{gap: "1.5rem"}} className={twMerge("flex text-foreground items-center", direction === "vertical" ? "flex-col" : "flex-row", rest.className)}>
            <IconAnimation delay={1.4}>
                <DiscordIcon className="size-6" />
            </IconAnimation>    
            <IconAnimation delay={1.2}>
                <InstagramIcon className="size-7" />
            </IconAnimation>
            <IconAnimation delay={1}>
                <LinkedInIcon className="size-7" />
            </IconAnimation>
            <IconAnimation delay={0.8}>
                <GithubIcon className="size-7" />
            </IconAnimation>
        </motion.div>
    )
}
export default SocialMedia;