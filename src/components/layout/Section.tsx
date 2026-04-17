import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  children?: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ variant = 'default', spacing = 'lg', className, children, ...props }) => {
  const variants = {
    default: 'bg-white',
    alternate: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };
  const spacings = {
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    none: '',
  };
  return (
    <section className={cn(variants[variant], spacings[spacing], className)} {...props}>
      {children}
    </section>
  );
}

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container mx-auto max-w-6xl px-4 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}
