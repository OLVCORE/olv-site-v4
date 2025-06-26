'use client';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'md', className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium transition ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    />
  )
);

Button.displayName = 'Button'; 