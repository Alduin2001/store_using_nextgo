import { TypoGraphyProps } from "@/interfaces/TypoGraphy";
import { FC } from "react";

export const TypoGraphy: FC<TypoGraphyProps> = ({
    Tag,
    position,
    bold,
    italic,
    children,
    size,
    className,
  })=>{
    
    return(
    <Tag className={`text-${position} text-${size} ${className} ${italic ? 'italic' : ''} ${bold ? 'font-bold' : ''}`}>{children}</Tag>
);
  };