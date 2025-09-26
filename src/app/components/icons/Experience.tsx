import { IconProps } from "@/app/types/icon.types";
import {motion} from 'framer-motion';

const ExpeerienceIcon = ({ ...rest }: IconProps) => {
    return (
        <motion.svg variants={rest.variants} className={rest.className} whileHover={rest.whileHover} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.6001 11.665C11.0151 11.05 12.0001 9.64 12.0001 8C12.0001 5.79 10.2101 4 8.0001 4C5.7901 4 4.0001 5.79 4.0001 8C4.0001 9.64 4.9851 11.05 6.4001 11.665V14.4H3.2001C2.3151 14.4 1.6001 15.115 1.6001 16C1.6001 16.885 2.3151 17.6 3.2001 17.6H14.4001V20.335C12.9851 20.95 12.0001 22.36 12.0001 24C12.0001 26.21 13.7901 28 16.0001 28C18.2101 28 20.0001 26.21 20.0001 24C20.0001 22.36 19.0151 20.95 17.6001 20.335V17.6H28.8001C29.6851 17.6 30.4001 16.885 30.4001 16C30.4001 15.115 29.6851 14.4 28.8001 14.4H25.6001V11.665C27.0151 11.05 28.0001 9.64 28.0001 8C28.0001 5.79 26.2101 4 24.0001 4C21.7901 4 20.0001 5.79 20.0001 8C20.0001 9.64 20.9851 11.05 22.4001 11.665V14.4H9.6001V11.665Z" fill="currentColor" />
        </motion.svg>

    );
}

export default ExpeerienceIcon;