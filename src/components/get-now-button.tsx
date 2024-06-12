import {Button, buttonVariants} from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";

export interface GetNowButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{
        text? : string;
}


// const GetNowButton = ({ text, className, ... props}: GetNowButtonProps) => {
//     return (
//         <Button className={"flex gap-2 w-fit " + className} {... props}>
//             <p>{text ?? "Get TranslateFast" }</p>
//             <Image src={"/icon-alt.png"} alt={""} width={24} height={24} />
//         </Button>
//     )
// }
const GetNowButton = ({ text, className, ... props}: GetNowButtonProps) => {
    return (
        <Button className={"flex gap-2 w-fit " + className} {... props}>
            <p>{text ?? "Get TranslateFast" }</p>
            <Image src={"/icon-alt.png"} alt={""} width={24} height={24} />
        </Button>
    )
}

export default GetNowButton;