import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlassLayout } from './components/layout/GlassLayout';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { Lesson } from './pages/Lesson';
import { Quiz } from './pages/Quiz';
import { Insights } from './pages/Insights';
import { Analytics } from './pages/Analytics';
import { Revision } from './pages/Revision';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<GlassLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/revision" element={<Revision />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
