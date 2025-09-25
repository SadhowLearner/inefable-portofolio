import { IconProps } from "@/app/types/icon.types";
import { motion } from "framer-motion";


const ProjectIcon = ({ ...rest }: IconProps) => {
    return (
        <motion.svg variants={rest.variants} className={rest.className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.39995 25.6H25.6C27.365 25.6 28.8 24.165 28.8 22.4V10.4C28.8 8.63505 27.365 7.20005 25.6 7.20005H18.135C17.79 7.20005 17.45 7.09005 17.175 6.88005L15.255 5.44005C14.7 5.02505 14.025 4.80005 13.335 4.80005H6.39995C4.63495 4.80005 3.19995 6.23505 3.19995 8.00005V22.4C3.19995 24.165 4.63495 25.6 6.39995 25.6Z" fill="currentColor" />
        </motion.svg>
    );
}

//TODO: Change while hover to open project

export default ProjectIcon;