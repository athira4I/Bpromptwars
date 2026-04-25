import React from 'react';
import { motion } from 'framer-motion';

export function ComprehensionIndicator({ status = 'good' }) {
  // status can be 'good', 'struggling', 'confused'
  const colors = {
    good: 'bg-emerald-500 shadow-emerald-500/50',
    struggling: 'bg-amber-500 shadow-amber-500/50',
    confused: 'bg-red-500 shadow-red-500/50',
  };

  const labels = {
    good: 'Optimal Understanding',
    struggling: 'Taking More Time',
    confused: 'Needs Simplification',
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 w-fit">
      <div className="relative flex h-3 w-3">
        <motion.span 
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${colors[status]}`}
        />
        <span className={`relative inline-flex rounded-full h-3 w-3 ${colors[status].split(' ')[0]}`} />
      </div>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
        AI Detects: {labels[status]}
      </span>
    </div>
  );
}
