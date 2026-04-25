import React from 'react';
import { motion } from 'framer-motion';
import { Play, Flame, Trophy, Clock, ArrowRight } from 'lucide-react';
import { GlassCard, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { InsightCard } from '../components/intelligent/InsightCard';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto space-y-8 pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground text-lg">You're 70% through AI Basics. Keep it up!</p>
        </div>
        <div className="flex gap-4">
          <GlassCard className="flex items-center gap-3 p-3 px-4 rounded-2xl">
            <Flame className="text-orange-500" size={24} />
            <div>
              <p className="text-sm font-bold">14 Days</p>
              <p className="text-xs text-muted-foreground">Streak</p>
            </div>
          </GlassCard>
          <GlassCard className="flex items-center gap-3 p-3 px-4 rounded-2xl">
            <Trophy className="text-yellow-500" size={24} />
            <div>
              <p className="text-sm font-bold">1,250</p>
              <p className="text-xs text-muted-foreground">Points</p>
            </div>
          </GlassCard>
        </div>
      </motion.header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400 }}>
            <GlassCard className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40">
                    <Play size={32} className="ml-1" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-end mb-2">
                    <h2 className="text-2xl font-bold">Neural Networks Deep Dive</h2>
                    <span className="font-semibold text-primary">70%</span>
                  </div>
                  <ProgressBar value={70} className="h-3 mb-6" />
                  <Button size="lg" className="w-full sm:w-auto gap-2" onClick={() => navigate('/lesson')}>
                    Continue Learning <ArrowRight size={18} />
                  </Button>
                </div>
              </CardContent>
            </GlassCard>
          </motion.div>

          <h3 className="text-xl font-bold pt-4">AI Recommended For You</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Backpropagation Intro", time: "15 min", type: "Concept" },
              { title: "Activation Functions", time: "10 min", type: "Quiz" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }}>
                <GlassCard className="hover:border-primary/50 transition-all cursor-pointer group h-full shadow-lg hover:shadow-primary/20">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-300">
                      {item.type}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <Clock size={14} /> {item.time}
                    </div>
                  </div>
                  <h4 className="font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                </CardContent>
              </GlassCard>
            </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={itemVariants} className="space-y-6">
          <InsightCard 
            type="warning" 
            title="Memory Alert" 
            description="You might forget 'Gradient Descent' soon. A quick 5-min review is recommended." 
          />
          <InsightCard 
            type="success" 
            title="Learning Insight" 
            description="You're completing quizzes 20% faster than average in the Logic module!" 
          />
          
          <GlassCard>
            <CardHeader>
              <CardTitle>Daily Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">30 mins / 45 mins</span>
                <span className="text-sm font-medium">66%</span>
              </div>
              <ProgressBar value={66} className="mb-4" />
              <p className="text-xs text-muted-foreground text-center">Just 15 more minutes to reach your goal!</p>
            </CardContent>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
