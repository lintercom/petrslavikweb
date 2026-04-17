import React from 'react';
import { cn } from '@/lib/utils';

interface SpotlightHeadingProps {
  text: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spotlight' | 'solid';
  as?: 'h1' | 'h2' | 'h3';
}

export function SpotlightHeading({ text, className, size = 'xl', variant = 'spotlight', as: Tag = 'h1' }: SpotlightHeadingProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl lg:text-4xl",
    md: "text-3xl md:text-5xl lg:text-6xl",
    lg: "text-4xl md:text-6xl lg:text-7xl",
    xl: "text-5xl md:text-7xl lg:text-8xl",
  };

  return (
    <div className={cn(
      "relative inline-block overflow-hidden select-none z-[50]", 
      variant === 'spotlight' && "mix-blend-difference",
      className
    )}>
      <div className={cn(
        "px-4 md:px-8 py-3",
        variant === 'spotlight' ? "bg-brand-blue-spotlight text-brand-black" : "bg-brand-brown-spotlight text-brand-black"
      )}>
        <Tag className={cn("font-extrabold tracking-tighter leading-none text-inherit uppercase", sizeClasses[size])}>
          {text}
        </Tag>
      </div>
    </div>
  );
}
