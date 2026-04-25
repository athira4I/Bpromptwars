import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { motion, AnimatePresence } from 'framer-motion';

export function AIChatTutor() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: "Hello! I'm your AI tutor. I noticed you're reviewing Logic Building. What part of the current concept is confusing?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Sanitize input (basic escaping for demo)
    const sanitizedInput = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: sanitizedInput }]);
    setInput('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        role: 'ai', 
        text: "That's a great question! An easy way to think about it is like a recipe. If you don't follow the steps in order, the cake won't bake correctly. Does that analogy help?" 
      }]);
    }, 1500);
  };

  const quickActions = ["Explain simpler", "Give analogy", "Test me"];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-2">
        <Sparkles className="text-primary" size={20} />
        <h3 className="font-semibold">AI Tutor</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-slate-100 dark:bg-slate-800 text-foreground rounded-tl-sm'}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-foreground rounded-tl-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickActions.map(action => (
            <button 
              key={action}
              onClick={() => setInput(action)}
              className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
        <div className="flex gap-2 relative">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your AI tutor..."
            className="pr-10 rounded-full"
          />
          <Button size="icon" className="rounded-full absolute right-1 top-1 h-8 w-8" onClick={handleSend}>
            <Send size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
