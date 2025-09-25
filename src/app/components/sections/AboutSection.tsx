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
            <div
            className="flex-1/2 h-[100dvh] bg-foreground"/>
            <section className={twMerge("flex-1/2 bg-background flex-col justify-center items-center p-16 space-y-8", textAlign)}>
                {rest.children}
            </section>
        </section>
    );
}

export const AboutSection = () => {
    return (
        <SplitSection float="left" id="about">
            <h1>Hi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in amet aut. Illum incidunt deserunt, suscipit dolorum pariatur, eligendi quia, doloremque veritatis at maxime reprehenderit labore blanditiis porro assumenda amet!
            Provident numquam corrupti eveniet quaerat incidunt consequatur eum consequuntur, beatae recusandae tempora quo ratione rerum reiciendis quidem eligendi error amet quae similique nihil tenetur. Natus libero voluptatum sed amet id!
            Eligendi odio quae, illo explicabo pariatur vero, officia saepe fuga amet dignissimos laudantium nostrum rerum deleniti provident dolorum eveniet labore! Omnis distinctio iste unde ullam, reprehenderit dignissimos facilis repellat ipsum.
            Ipsum dignissimos suscipit libero praesentium quo voluptate corrupti ad autem. Eius beatae porro pariatur sequi? Mollitia, nihil. Qui, fugiat, omnis tempore ipsam deserunt odit nam explicabo necessitatibus doloremque natus harum?
            Molestiae et sunt exercitationem ad, modi adipisci voluptates ab illo quod molestias consectetur quaerat laudantium doloremque autem error provident? Corporis ipsum fuga nihil blanditiis in. Impedit, cupiditate fuga. Necessitatibus, sapiente?</p>
        </SplitSection>
    );
}
