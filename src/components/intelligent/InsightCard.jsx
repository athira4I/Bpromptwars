import React from 'react';
import { Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react';
import { GlassCard, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { motion } from 'framer-motion';

export function InsightCard({ type = 'info', title, description }) {
  const icons = {
    info: <Lightbulb className="text-primary" size={24} />,
    warning: <AlertTriangle className="text-warning" size={24} />,
    success: <TrendingUp className="text-secondary" size={24} />
  };

  const borderColors = {
    info: "border-l-primary",
    warning: "border-l-warning",
    success: "border-l-secondary"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className={`border-l-4 ${borderColors[type]} overflow-hidden relative`}>
        {/* Subtle glow effect */}
        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-${type === 'info' ? 'primary' : type === 'warning' ? 'warning' : 'secondary'}`} />
        
        <CardContent className="p-0 flex items-start gap-4">
          <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-md">
            {icons[type]}
          </div>
          <div>
            <CardTitle className="text-base mb-1">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </GlassCard>
    </motion.div>
  );
}
