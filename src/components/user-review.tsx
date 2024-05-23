import React, {BaseHTMLAttributes} from "react";
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
    ({ title, name, message, image } , ref) => {
        return (
            <div className={"flex flex-col items-center max-w-80 gap-4"} ref={ref}>
                <div className={""}>
                    <div className={"flex gap-[2px] text-amber-500 h-4 fit"}>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
                <div className={"flex flex-col items-center gap-4"}>
                    <p className={"text-center"}>{message}</p>
                    <div className={"flex gap-4 items-center"}>
                        <Avatar className={"flex bg-neutral-200"}>
                            <AvatarImage src={image}></AvatarImage>
                            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className={"font-semibold text-lg"}>{name}</p>
                            <span>{title}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

UserReview.displayName = "UserReview";

export default UserReview;