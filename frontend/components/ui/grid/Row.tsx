import { GridProps } from "@/interfaces/components/GridProps";
import { FC } from "react";

export const Row: FC<GridProps> = ({ children, className, gap, min }) => {
  return (
    <div
    style={{gridTemplateColumns:`repeat(auto-fit,minmax(${min},1fr))`}}
      className={`w-full grid gap-${gap} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
