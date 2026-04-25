import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export function ProgressBar({ value, className, indicatorClassName, ...props }) {
  return (
    <div
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800", className)}
      {...props}
    >
      <motion.div
        className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
        initial={{ x: "-100%" }}
        animate={{ x: `-${100 - (value || 0)}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
