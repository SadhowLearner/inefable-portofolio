import SocialMedia from "../icons/socials/SocialMedia";
import { motion } from "framer-motion";

const SocialMediaNav = () => {
    return ( 
        <motion.nav
        initial={{translateX: 300}}
        transition={{ delay: 0.3, type: "tween"}}
        animate={{translateX: 0}}
        aria-label="Social Media" className="fixed top-0 flex flex-row w-max mt-5 items-center h-max right-0 gap-8">
            <SocialMedia direction="horizontal" />
            <hr className="border-2 rounded-2xl border-foreground w-[100px]" />
        </motion.nav>
     );
}
 
export default SocialMediaNav;