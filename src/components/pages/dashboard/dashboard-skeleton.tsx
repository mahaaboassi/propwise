"use client";

import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[var(--bg-default)]",
        className
      )}
    />
  );
};

export default Skeleton;