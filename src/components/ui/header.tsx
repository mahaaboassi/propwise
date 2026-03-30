import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  paragraph?: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Header = ({ title, paragraph, level = 2, className }: Props) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return (
    <div >
      <Tag className={cn(
          "leading-tight",
          level === 1 && "text-[var(--content-emphasis)] font-bold text-[20px] leading-[20px] font-heading",
          level === 2 && "",
          level === 3 && "text-[var(--content-info)] font-medium text-base",
          className
        )}>{title}</Tag>
      {paragraph && <p className="mt-[4px] leading-[18px] text-[#6E7991] leading-[20px] text-xs font-normal">{paragraph}</p>}
    </div>
  );
};

export default Header;