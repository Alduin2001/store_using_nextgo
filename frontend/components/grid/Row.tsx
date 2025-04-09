import { GridProps } from "@/interfaces/GridProps";
import { FC } from "react";

export const Row: FC<GridProps> = ({ children, className, gap, min }) => {
  return (
    <div
      className={`w-full grid grid-cols-[repeat(auto-fit,minmax(${min},1fr))] gap-${gap} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
