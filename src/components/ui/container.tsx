import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  width?: "narrow" | "default" | "wide";
  children: ReactNode;
};

const widthMap: Record<NonNullable<ContainerProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({ width = "default", className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", widthMap[width], className)} {...props} />;
}
