import Image from "next/image";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";


export const SplitSection = ({ float = "left",...rest}: {float?: "left" | "right"} & HTMLProps<HTMLDivElement>) => {
    let flexDir: string;
    let textAlign: string;
    switch (float) {
        case "right":
            flexDir = "flex-row-reverse";
            textAlign = "text-right";
            break;
        case "left":
            flexDir = "flex-row";
            textAlign = "text-left";
            break;
        default:
            flexDir = "flex-row";
            textAlign = "text-left";
            break;
        
    }
    
    return (
        <section id={rest.id} className={twMerge("flex h-[100dvh] justify-between items-center", rest.className , flexDir)}>
            {/* <Image src={} className="flex-1/2 h-[100dvh] bg-foreground"/> */}
                {rest.children}
           
        </section>
    );
}

export const AboutSection = () => {
    return (
        <SplitSection float="left" id="about" className=" w-full bg-foreground  relative">
            
        </SplitSection>
    );
}
