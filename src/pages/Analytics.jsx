import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { GlassCard, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const skillData = [
  { subject: 'Logic Building', A: 120, fullMark: 150 },
  { subject: 'Syntax', A: 98, fullMark: 150 },
  { subject: 'Algorithms', A: 86, fullMark: 150 },
  { subject: 'Debugging', A: 99, fullMark: 150 },
  { subject: 'Architecture', A: 85, fullMark: 150 },
  { subject: 'Testing', A: 65, fullMark: 150 },
];

const retentionData = [
  { day: 'Mon', score: 85 },
  { day: 'Tue', score: 88 },
  { day: 'Wed', score: 82 },
  { day: 'Thu', score: 89 },
  { day: 'Fri', score: 94 },
  { day: 'Sat', score: 96 },
  { day: 'Sun', score: 95 },
];

export function Analytics() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      <header>
        <h1 className="text-3xl font-bold mb-2">Progress & Skills</h1>
        <p className="text-muted-foreground text-lg">Track your growth over time.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard>
          <CardHeader>
            <CardTitle>Skill Profile</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="Alex" dataKey="A" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.4} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </GlassCard>

        <GlassCard>
          <CardHeader>
            <CardTitle>Memory Retention</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retentionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#10B981" fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </GlassCard>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Achievement Badges</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: '🔥', title: '7 Day Streak', date: 'Oct 12' },
          { icon: '🧠', title: 'Logic Master', date: 'Oct 15' },
          { icon: '⚡', title: 'Fast Learner', date: 'Oct 18' },
          { icon: '🎯', title: 'Perfect Quiz', date: 'Oct 20' },
        ].map((badge, i) => (
          <GlassCard key={i} className="text-center hover:scale-105 transition-transform cursor-default">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h4 className="font-bold text-sm mb-1">{badge.title}</h4>
              <p className="text-xs text-muted-foreground">{badge.date}</p>
            </CardContent>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
