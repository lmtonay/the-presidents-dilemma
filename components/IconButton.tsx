"use client";

import React from "react";
import { IconType } from "react-icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// Define the props for the IconButton component
interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  icon: IconType;
  variant?: "default" | "secondary" | "danger" | "ghost" | "outline" | "outlineSecondary" | "outlineDanger" | "outlineGhost" | null;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  icon: Icon,
  variant,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "rounded flex flex-col items-center justify-center min-h-20",
        className
      )}
      variant={variant}
      {...props}
    >
      <Icon className="scale-150" />
      <h5 className="mb-[-8px] text-wrap">{children}</h5>
    </Button>
  );
};

export default IconButton;
