import { IconProps } from '@/app/types/icon.types';
import {motion} from 'framer-motion';

const SkillIcon = ({...rest}: IconProps) => {
    return (
    <motion.svg variants={rest.variants} className={rest.className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.79995 4.80005C3.91495 4.80005 3.19995 5.51505 3.19995 6.40005C3.19995 7.28505 3.91495 8.00005 4.79995 8.00005H27.2C28.085 8.00005 28.8 7.28505 28.8 6.40005C28.8 5.51505 28.085 4.80005 27.2 4.80005H4.79995ZM4.79995 24C3.91495 24 3.19995 24.715 3.19995 25.6C3.19995 26.485 3.91495 27.2 4.79995 27.2H11.2V20.8C11.2 18.15 13.35 16 16 16C18.65 16 20.8 18.15 20.8 20.8V27.2H27.2C28.085 27.2 28.8 26.485 28.8 25.6C28.8 24.715 28.085 24 27.2 24V10.4H4.79995V24Z" fill="currentColor" />
    </motion.svg>
    );
}

export default SkillIcon;