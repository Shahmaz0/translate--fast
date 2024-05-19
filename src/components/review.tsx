import React, {BaseHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


interface UserReviewProps
    extends BaseHTMLAttributes<HTMLDivElement>{

    name: string;
    title: string;
    message:String;
    variant: "positive" | "negative";
}

const UserReview = React.forwardRef<HTMLDivElement, UserReviewProps>(
    ({ title, name, message } , ref) => {
        return (
            <div ref={ref}>
                <div className={"flex gap-[2px] text-amber-500 h-4 fit"}>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <p className={"text-center"}>{message}</p>
                <p className={"font-semibold text-lg"}>{name}</p>\
                <span>{title}</span>
            </div>
        );
    }
);

UserReview.displayName = "UserReview";

export default UserReview;