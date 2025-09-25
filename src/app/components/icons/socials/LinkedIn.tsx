import { motion } from "framer-motion";
import { iconAnimation } from "../../animations/IconAnimation";

const LinkedInIcon = ({className}: {className:string}) => {
    return (
        <motion.svg variants={iconAnimation} initial="hidden" animate="show" whileHover="hover"  className={className} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.6 5.2998H6.39505C5.51505 5.2998 4.80005 6.0248 4.80005 6.9148V26.0848C4.80005 26.9748 5.51505 27.6998 6.39505 27.6998H25.6C26.48 27.6998 27.2 26.9748 27.2 26.0848V6.9148C27.2 6.0248 26.48 5.2998 25.6 5.2998ZM11.57 24.4998H8.25005V13.8098H11.575V24.4998H11.57ZM9.91005 8.4998C10.975 8.4998 11.835 9.3598 11.835 10.4248C11.835 11.4898 10.975 12.3498 9.91005 12.3498C8.84505 12.3498 7.98505 11.4898 7.98505 10.4248C7.98505 9.3598 8.84505 8.4998 9.91005 8.4998ZM24.015 24.4998H20.695V19.2998C20.695 18.0598 20.67 16.4648 18.97 16.4648C17.24 16.4648 16.975 17.8148 16.975 19.2098V24.4998H13.655V13.8098H16.84V15.2698H16.885C17.33 14.4298 18.415 13.5448 20.03 13.5448C23.39 13.5448 24.015 15.7598 24.015 18.6398V24.4998Z" fill="currentColor" />
        </motion.svg>
    )
}

export default LinkedInIcon;