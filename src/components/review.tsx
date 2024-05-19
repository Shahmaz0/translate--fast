import React, {BaseHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";


interface UserReviewProps
    extends BaseHTMLAttributes<HTMLDivElement>{
    image: string;
    name: string;
    title: string;
    message:String;
}

const UserReview = React.forwardRef<HTMLDivElement, UserReviewProps>(
    ({ title, name, message } , ref) => {
        return (
            <div className={"flex flex-col items-center max-w-80"} ref={ref}>
                <div className={"block"}>
                    <div className={"flex gap-[2px] text-amber-500 h-4 fit"}>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
                <div>
                    <Avatar>
                        <AvatarImage src={undefined}></AvatarImage>
                        <AvatarFallback>{name.slice(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <p className={"text-center"}>{message}</p>
                    <p className={"font-semibold text-lg"}>{name}</p>
                    <span>{title}</span>
                </div>
            </div>
        );
    }
);

UserReview.displayName = "UserReview";

export default UserReview;