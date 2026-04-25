import React from 'react';
import { GlassCard, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { TrendingUp, TrendingDown, Target, Brain } from 'lucide-react';

export function Insights() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      <header>
        <h1 className="text-3xl font-bold mb-2">Learning Insights</h1>
        <p className="text-muted-foreground text-lg">Understand WHY you're improving and where to focus.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="border-t-4 border-t-emerald-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <TrendingUp className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle>Why You're Improving</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium">Consistent Practice Timing</p>
                <p className="text-sm text-muted-foreground">You study most effectively between 9 AM and 11 AM. Your accuracy is 25% higher during this window.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium">Using Analogies</p>
                <p className="text-sm text-muted-foreground">You tend to answer correctly after asking the AI Tutor for "Explain like I'm 5". This learning style works for you!</p>
              </div>
            </div>
          </CardContent>
        </GlassCard>

        <GlassCard className="border-t-4 border-t-amber-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <TrendingDown className="text-amber-600 dark:text-amber-400" />
              </div>
              <CardTitle>Current Struggle Areas</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium">Mathematical Formulas</p>
                <p className="text-sm text-muted-foreground">When questions involve raw formulas, your confidence score drops to "Not Sure" 80% of the time.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium">Speed vs Accuracy</p>
                <p className="text-sm text-muted-foreground">When you answer a question in under 5 seconds, your error rate spikes. Take a moment to read fully.</p>
              </div>
            </div>
          </CardContent>
        </GlassCard>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">AI Recommended Strategy</h2>
      <GlassCard className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <Brain className="text-primary" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Visual-First Formula Learning</h3>
            <p className="text-muted-foreground mb-4">
              Since you struggle with raw math but excel with analogies, we are tweaking your future lessons. Mathematical concepts will now automatically be presented with interactive visual graphs first, before showing the equations.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Target size={16} className="text-primary" /> Action Plan Applied
              </div>
            </div>
          </div>
        </CardContent>
      </GlassCard>
    </div>
  );
}
