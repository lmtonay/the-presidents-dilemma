import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 rounded-full border-r-2 border-b-2 border-blue-200 active:border-0 active:border-t-2",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 rounded-full border-r-2 border-b-2 border-neutral-300 active:border-0 active:border-t-2",
        danger: "bg-red-500 text-white hover:bg-red-600 rounded-full border-r-2 border-b-2 border-red-200 active:border-0 active:border-t-2",
        ghost: "bg-transparent text-neutral-900",
        outline: "bg-transparent text-blue-500 hover:bg-blue-50 rounded-full border-2 border-blue-200 active:border-transparent",
        outlineSecondary: "bg-transparent text-neutral-900 hover:bg-neutral-50 rounded-full border-2 border-neutral-300 active:border-transparent",
        outlineDanger: "bg-transparent text-red-500 hover:bg-red-50 rounded-full border-2 border-red-200 active:border-transparent",
        outlineGhost: "bg-transparent text-neutral-900",
      },
      size: {
        default: "h-10 px-4 py-2 my-[2px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
