import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  eyebrow?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, align = "left", className, children, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", align === "center" ? "items-center text-center" : "items-start", className)}>
      {eyebrow ? <span className="uppercase tracking-[0.3em] text-xs text-blue-600">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold text-slate-900" {...props}>
        {children}
      </h2>
    </div>
  );
}
