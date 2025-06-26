'use client';
import { ReactNode } from 'react';

export const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-lg shadow border bg-slate-900/80 ${className}`.trim()}>{children}</div>
);

export const CardHeader = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 border-b border-white/10 ${className}`.trim()}>{children}</div>
);

export const CardTitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold ${className}`.trim()}>{children}</h3>
);

export const CardContent = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 ${className}`.trim()}>{children}</div>
); 