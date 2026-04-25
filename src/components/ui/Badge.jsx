import React from 'react';
import { cn } from '../../utils/cn';

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover",
    outline: "text-foreground border-slate-200 dark:border-slate-700",
    warning: "border-transparent bg-warning text-warning-foreground",
    glass: "glass-panel text-foreground",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
