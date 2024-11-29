"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { variant?: 'danger' | 'success' | 'intermediate' }
>(({ className, value, variant, ...props }, ref) => {
  const variantClasses = {
    danger: "bg-red-500 dark:bg-red-700",
    success: "bg-green-500 dark:bg-green-700",
    intermediate: "bg-yellow-500 dark:bg-yellow-700",
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all",
          variant ? variantClasses[variant] : "bg-red-500 dark:bg-neutral-50"
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
