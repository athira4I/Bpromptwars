import React from 'react';
import { GlassCard, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Type, Volume2, Ear } from 'lucide-react';

export function Settings() {
  const { theme, setTheme, dyslexicFont, setDyslexicFont } = useTheme();

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      <header>
        <h1 className="text-3xl font-bold mb-2">Settings & Accessibility</h1>
        <p className="text-muted-foreground text-lg">Customize your learning experience.</p>
      </header>

      <div className="grid gap-6">
        <GlassCard>
          <CardHeader>
            <CardTitle className="text-xl">Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">Toggle between light and dark mode.</p>
              </div>
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button 
                  onClick={() => setTheme('light')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${theme === 'light' ? 'bg-white shadow text-primary' : 'text-muted-foreground'}`}
                >
                  <Sun size={16} /> Light
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${theme === 'dark' ? 'bg-slate-700 shadow text-primary' : 'text-muted-foreground'}`}
                >
                  <Moon size={16} /> Dark
                </button>
              </div>
            </div>
          </CardContent>
        </GlassCard>

        <GlassCard>
          <CardHeader>
            <CardTitle className="text-xl">Accessibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="p-2 bg-primary/10 rounded-lg text-primary"><Type size={20} /></div>
                <div>
                  <p className="font-medium">Dyslexia-Friendly Font</p>
                  <p className="text-sm text-muted-foreground">Use a specialized font for easier reading.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={dyslexicFont} onChange={(e) => setDyslexicFont(e.target.checked)} />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="p-2 bg-primary/10 rounded-lg text-primary"><Volume2 size={20} /></div>
                <div>
                  <p className="font-medium">Text-to-Speech</p>
                  <p className="text-sm text-muted-foreground">AI Tutor will read explanations aloud.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="p-2 bg-primary/10 rounded-lg text-primary"><Ear size={20} /></div>
                <div>
                  <p className="font-medium">Voice Input</p>
                  <p className="text-sm text-muted-foreground">Allow microphone input in AI Tutor chat.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </CardContent>
        </GlassCard>
      </div>
    </div>
  );
}
