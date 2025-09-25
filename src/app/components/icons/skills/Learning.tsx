import { IconProps } from '@/app/types/icon.types';
import { motion } from 'framer-motion';

const LearningIcon = ({ ...rest }: IconProps) => {
    return (
        <motion.svg
            className={rest.className}
            width="36"
            height="32"
            viewBox="0 0 36 32"
            fill="currentColor"
            variants={rest.variants}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M33.8887 2.00315C30.4637 2.19752 23.6563 2.90503 19.4538 5.47752C19.1638 5.65502 18.9994 5.97065 18.9994 6.30065V29.0425C18.9994 29.7644 19.7887 30.2207 20.4544 29.8857C24.7781 27.7094 31.0312 27.1156 34.1231 26.9531C35.1787 26.8975 35.9994 26.0513 35.9994 25.0369V3.9219C36 2.81503 35.04 1.93815 33.8887 2.00315ZM16.5456 5.47752C12.3438 2.90503 5.53625 2.19815 2.11125 2.00315C0.96 1.93815 0 2.81503 0 3.9219V25.0375C0 26.0525 0.820625 26.8988 1.87625 26.9538C4.96938 27.1163 11.2256 27.7106 15.5494 29.8881C16.2131 30.2225 17 29.7669 17 29.0469V6.2894C17 5.95878 16.8363 5.65565 16.5456 5.47752Z" fill="currentColor" />

        </motion.svg>
    );
}

// TODO: Change to outline address-card while hover
export default LearningIcon;