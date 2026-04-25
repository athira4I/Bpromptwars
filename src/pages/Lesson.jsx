import React, { useState } from 'react';
import { AIChatTutor } from '../components/intelligent/AIChatTutor';
import { ComprehensionIndicator } from '../components/intelligent/ComprehensionIndicator';
import { Button } from '../components/ui/Button';
import { Slider } from '../components/ui/Slider';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Lesson() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState(50); // 0: Beginner, 50: Intermediate, 100: Advanced
  
  const getDifficultyLabel = () => {
    if (difficulty < 33) return 'Beginner (Simple words)';
    if (difficulty < 66) return 'Intermediate (Standard)';
    return 'Advanced (Technical)';
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-4">
      <header className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={20} />
          </Button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-[10px]">Module 4: Neural Networks</Badge>
              <ComprehensionIndicator status="good" />
            </div>
            <h1 className="text-2xl font-bold">Understanding Backpropagation</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
          <Layers size={18} className="text-muted-foreground" />
          <div className="w-32 flex flex-col gap-1">
            <span className="text-[10px] text-muted-foreground text-center">{getDifficultyLabel()}</span>
            <Slider value={difficulty} onChange={(e) => setDifficulty(parseInt(e.target.value))} />
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        {/* Left Panel: Content */}
        <div className="flex-[3] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-y-auto p-8 lg:p-12 prose dark:prose-invert max-w-none">
          <div className="flex items-center gap-3 mb-6 text-primary">
            <BookOpen size={24} />
            <span className="font-semibold uppercase tracking-wider text-sm">Concept Explanation</span>
          </div>
          
          <p className="text-lg leading-relaxed">
            Backpropagation, short for "backward propagation of errors," is the fundamental algorithm used to train neural networks. It calculates the gradient of the loss function with respect to the weights of the network.
          </p>

          <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-4">The Core Intuition</h3>
            {difficulty < 50 ? (
              <p className="m-0">
                Imagine you are blindfolded on a hill and want to find the lowest point. You feel the slope with your feet and take a step downhill. Backpropagation is like figuring out exactly which way is downhill and how steep it is, so you know how big of a step to take.
              </p>
            ) : (
              <p className="m-0">
                It systematically applies the chain rule of calculus to compute the derivatives of the error backward from the output layer through the hidden layers. This provides the direction (gradient) in which to adjust the weights to minimize the error.
              </p>
            )}
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Key Steps</h3>
          <ul className="space-y-4">
            <li><strong>Forward Pass:</strong> Input data is passed through the network to generate a prediction.</li>
            <li><strong>Calculate Loss:</strong> Compare the prediction to the actual target to find the error.</li>
            <li><strong>Backward Pass:</strong> Calculate how much each weight contributed to the error (the gradient).</li>
            <li><strong>Update Weights:</strong> Adjust the weights in the opposite direction of the gradient to reduce the error.</li>
          </ul>

          <div className="mt-12 flex justify-end">
            <Button size="lg" onClick={() => navigate('/quiz')}>Take Checkpoint Quiz</Button>
          </div>
        </div>

        {/* Right Panel: AI Tutor */}
        <div className="flex-[2] min-h-0">
          <AIChatTutor />
        </div>
      </div>
    </div>
  );
}
