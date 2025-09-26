import { IconProps } from "@/app/types/icon.types";
import { motion, MotionProps } from "motion/react";

const HouseIcon = ({...rest}: IconProps & MotionProps) => {
    return (
        <motion.svg variants={rest.variants} whileHover={rest.whileHover} className={rest.className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0901 3.62989C16.4751 3.05989 15.5251 3.05989 14.9151 3.62989L3.7151 14.0299C3.2351 14.4799 3.0751 15.1749 3.3151 15.7849C3.5551 16.3949 4.1401 16.7999 4.8001 16.7999H5.6001V25.5999C5.6001 27.3649 7.0351 28.7999 8.8001 28.7999H23.2001C24.9651 28.7999 26.4001 27.3649 26.4001 25.5999V16.7999H27.2001C27.8601 16.7999 28.4501 16.3949 28.6901 15.7849C28.9301 15.1749 28.7701 14.4749 28.2901 14.0299L17.0901 3.62989ZM15.2001 19.1999H16.8001C18.1251 19.1999 19.2001 20.2749 19.2001 21.5999V26.3999H12.8001V21.5999C12.8001 20.2749 13.8751 19.1999 15.2001 19.1999Z" fill="currentColor" />
        </motion.svg>

    )
}

// TODO: Change to outline home while hover

export default HouseIcon;