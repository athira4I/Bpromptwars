import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Check, X, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const flashcards = [
  { id: 1, front: "What is an Epoch in Machine Learning?", back: "One complete pass of the training dataset through the algorithm." },
  { id: 2, front: "Define 'Overfitting'", back: "When a model learns the training data too well, including its noise, making it perform poorly on new, unseen data." },
  { id: 3, front: "What does CNN stand for?", back: "Convolutional Neural Network - mainly used for image processing." }
];

export function Revision() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCard(prev => prev + 1), 150);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-bold">Revision Complete!</h2>
          <p className="text-muted-foreground">Your memory retention for these topics has increased.</p>
          <Button onClick={() => { setCompleted(false); setCurrentCard(0); setIsFlipped(false); }}>Review Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col pb-10">
      <header className="mb-8">
        <div className="flex items-center gap-3 text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-lg w-fit mb-4 border border-amber-200 dark:border-amber-800">
          <AlertTriangle size={18} />
          <span className="font-medium text-sm">Review before you forget</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Spaced Repetition</h1>
        <p className="text-muted-foreground">Quick 5-minute memory booster.</p>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center relative perspective-1000">
        <div className="text-sm font-medium text-muted-foreground mb-4">Card {currentCard + 1} of {flashcards.length}</div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard + (isFlipped ? 'back' : 'front')}
            initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg aspect-video bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center p-8 text-center cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <h2 className="text-2xl md:text-3xl font-medium leading-tight">
              {isFlipped ? flashcards[currentCard].back : flashcards[currentCard].front}
            </h2>
            <div className="absolute bottom-6 text-sm text-muted-foreground flex items-center gap-2">
              <RefreshCcw size={14} /> Tap to flip
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={`mt-12 flex gap-4 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Button variant="outline" size="lg" className="border-red-200 hover:bg-red-50 hover:text-red-600 w-32" onClick={handleNext}>
            <X size={18} className="mr-2" /> Forgot
          </Button>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 w-32" onClick={handleNext}>
            <Check size={18} className="mr-2" /> Remembered
          </Button>
        </div>
      </div>
    </div>
  );
}
