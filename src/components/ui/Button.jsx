import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  asChild = false,
  children,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg transition-all",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-sm",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    outline: "border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground",
    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground",
    glass: "glass-panel hover:bg-white/50 dark:hover:bg-slate-700/50 text-foreground",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-lg px-3 text-xs",
    lg: "h-12 rounded-xl px-8",
    icon: "h-9 w-9",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
