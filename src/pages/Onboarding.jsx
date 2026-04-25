import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, ArrowRight, Code, BookOpen, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    goal: '',
    level: '',
    style: ''
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <div className="w-full max-w-2xl relative z-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="flex justify-center mb-8">
          <BrainCircuit className="text-primary w-16 h-16" />
        </div>

        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: "33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
              <h2 className="text-3xl font-bold text-center">What brings you to AuraLearn?</h2>
              <div className="grid gap-4">
                {['Career Transition', 'University Studies', 'Hobby / Self-Improvement'].map(goal => (
                  <button
                    key={goal}
                    onClick={() => setPreferences({ ...preferences, goal })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${preferences.goal === goal ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <span className="font-medium text-lg">{goal}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
              <h2 className="text-3xl font-bold text-center">What's your current skill level?</h2>
              <div className="grid gap-4">
                {[
                  { id: 'beginner', title: 'Beginner', desc: 'I am completely new to this.', icon: BookOpen },
                  { id: 'intermediate', title: 'Intermediate', desc: 'I know the basics and want to go deeper.', icon: Layers },
                  { id: 'advanced', title: 'Advanced', desc: 'I am looking for expert-level challenges.', icon: Code }
                ].map(level => (
                  <button
                    key={level.id}
                    onClick={() => setPreferences({ ...preferences, level: level.id })}
                    className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${preferences.level === level.id ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <div className={`p-3 rounded-lg ${preferences.level === level.id ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
                      <level.icon size={24} />
                    </div>
                    <div>
                      <span className="font-bold block">{level.title}</span>
                      <span className="text-sm text-muted-foreground">{level.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
              <h2 className="text-3xl font-bold text-center">How do you learn best?</h2>
              <p className="text-center text-muted-foreground mb-8">Our AI will adapt lessons to your preference.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {['Visual (Diagrams & Charts)', 'Text (Reading & Rules)', 'Interactive (Quizzes)', 'Examples (Analogies)'].map(style => (
                  <button
                    key={style}
                    onClick={() => setPreferences({ ...preferences, style })}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${preferences.style === style ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <span className="font-medium">{style}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex justify-between items-center">
          {step > 1 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button>
          ) : <div />}
          <Button 
            size="lg" 
            onClick={nextStep} 
            disabled={(step === 1 && !preferences.goal) || (step === 2 && !preferences.level) || (step === 3 && !preferences.style)}
            className="gap-2"
          >
            {step === 3 ? "Start Learning" : "Continue"} <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
