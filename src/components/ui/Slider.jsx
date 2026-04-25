import React from 'react';
import { cn } from '../../utils/cn';

export const Slider = React.forwardRef(({ className, value, onChange, min = 0, max = 100, ...props }, ref) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Slider.displayName = "Slider";
