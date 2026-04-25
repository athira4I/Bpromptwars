import React from 'react';
import { Bell, Search, Menu, Moon, Sun } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

export function Topbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 border-b glass-panel px-4 md:px-8 flex items-center justify-between z-10 sticky top-0">
      <div className="flex items-center gap-4 flex-1">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={20} />
        </Button>
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            className="pl-10 bg-slate-100 dark:bg-slate-800 border-none rounded-full" 
            placeholder="Search concepts, lessons..." 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </Button>
      </div>
    </header>
  );
}
