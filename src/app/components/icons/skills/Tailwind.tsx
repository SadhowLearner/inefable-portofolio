import { IconProps } from '@/app/types/icon.types';
import { motion } from 'framer-motion';

const TailwindIcon = ({ ...rest }: IconProps) => {
    return (
        <motion.svg
            className={rest.className}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            variants={rest.variants}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
        </motion.svg>
    );
}

// TODO: Change to outline address-card while hover
export default TailwindIcon;