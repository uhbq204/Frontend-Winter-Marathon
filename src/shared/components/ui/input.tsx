import * as React from "react"

import { cn } from "@/shared/utils/index"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground/50 placeholder:text-foreground/50 selection:bg-chart-2 selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-white/40 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-mono",
        "focus-visible:border-ring focus-visible:ring-ring/80 focus-visible:ring-3",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
