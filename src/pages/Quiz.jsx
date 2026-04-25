import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, BrainCircuit } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useNavigate } from 'react-router-dom';

const mockQuestions = [
  {
    id: 1,
    text: "What is the primary purpose of the Backpropagation algorithm?",
    options: [
      "To initialize the weights of a neural network.",
      "To pass input data forward through the network.",
      "To calculate the gradient of the loss function with respect to weights.",
      "To add non-linearity to the network."
    ],
    correct: 2,
    explanation: "Backpropagation uses the chain rule to calculate gradients backwards from the output, allowing the network to adjust weights and minimize loss."
  },
  {
    id: 2,
    text: "If a neural network is predicting exactly what it should, what is the value of the loss?",
    options: ["1", "Infinity", "0", "-1"],
    correct: 2,
    explanation: "Loss represents the error. If the prediction is perfect, there is zero error, so the loss is 0."
  }
];

export function Quiz() {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = mockQuestions[currentIdx];
  const progress = ((currentIdx) / mockQuestions.length) * 100;

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIdx < mockQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOpt(null);
      setConfidence(null);
      setIsSubmitted(false);
    } else {
      navigate('/insights');
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      <header className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => navigate('/lesson')}>
          <ArrowLeft size={20} />
        </Button>
        <div className="flex-1">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-muted-foreground">Adaptive Quiz</span>
            <span>{currentIdx + 1} / {mockQuestions.length}</span>
          </div>
          <ProgressBar value={progress + (isSubmitted ? (100/mockQuestions.length) : 0)} />
        </div>
      </header>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-8 leading-snug">{question.text}</h2>
            
            <div className="space-y-3 mb-8">
              {question.options.map((opt, i) => {
                const isCorrect = i === question.correct;
                const isSelected = i === selectedOpt;
                
                let btnStyle = "border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50";
                
                if (isSubmitted) {
                  if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-100";
                  else if (isSelected && !isCorrect) btnStyle = "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100";
                  else btnStyle = "opacity-50 border-slate-200 dark:border-slate-800";
                } else if (isSelected) {
                  btnStyle = "border-primary bg-primary/5 dark:bg-primary/10 ring-1 ring-primary";
                }

                return (
                  <button
                    key={i}
                    onClick={() => !isSubmitted && setSelectedOpt(i)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span className="font-medium">{opt}</span>
                    {isSubmitted && isCorrect && <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />}
                    {isSubmitted && isSelected && !isCorrect && <XCircle className="text-red-500 shrink-0" size={20} />}
                  </button>
                );
              })}
            </div>

            {!isSubmitted && selectedOpt !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-6">
                <p className="text-sm font-semibold mb-3 text-center">How confident are you?</p>
                <div className="flex justify-center gap-3">
                  {['Not Sure', 'Somewhat', 'Confident'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setConfidence(level)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${confidence === level ? 'bg-primary text-white border-primary' : 'bg-transparent border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {isSubmitted && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <BrainCircuit className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">AI Explanation</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-end">
        {!isSubmitted ? (
          <Button 
            size="lg" 
            onClick={handleSubmit} 
            disabled={selectedOpt === null || confidence === null}
            className="min-w-[150px]"
          >
            Submit Answer
          </Button>
        ) : (
          <Button size="lg" onClick={handleNext} className="min-w-[150px]">
            {currentIdx < mockQuestions.length - 1 ? 'Next Question' : 'View Results'}
          </Button>
        )}
      </div>
    </div>
  );
}
