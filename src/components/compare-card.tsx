import React, {BaseHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

// const compareVariants = cva("rounded-md p-6 flex flex-col gap-2",{
//     variants: {
//         variant: {
//             positive: "bg-green-200 text-green-900",
//             negative: "bg-red-200 text-red-900",
//         },
//
//     },
//     defaultVariants: {
//         variant: "positive",
//     }
// });
const compareVariants = cva("rounded-md p-6 flex flex-col gap-2",{
    variants: {
        variant: {
            positive: "bg-green-200 text-green-900",
            negative: "bg-red-200 text-red-900",
        },

    },
    defaultVariants: {
        variant: "positive",
    }
});

interface CompareCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof compareVariants> {
    title: string;
    variant: "positive" | "negative";
}

const CompareCard = React.forwardRef<HTMLDivElement, CompareCardProps>(
    ({ title, variant, className, children } , ref) => {
        return (
            <div className={cn(compareVariants({className, variant}))} ref={ref}>
                <h3 className={"font-bold text-lg"}>{title}</h3>
                {children}
            </div>
        );
    }
);

CompareCard.displayName = "CompareCard";

export default CompareCard;