import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, iconLeft, iconRight, children, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-extrabold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-brand-white active:scale-[0.98] whitespace-nowrap border-2 border-transparent";
    
    const variants = {
      primary: "bg-brand-black text-brand-white border-brand-black hover:bg-brand-white hover:text-brand-black hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] hover:-translate-y-0.5 focus-visible:ring-brand-black",
      secondary: "bg-brand-white text-brand-black border-brand-black hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] hover:-translate-y-0.5 focus-visible:ring-brand-black",
      outline: "border-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white text-brand-black focus-visible:ring-brand-black",
      ghost: "bg-transparent hover:bg-brand-black hover:text-brand-white text-brand-black focus-visible:ring-brand-black border-transparent",
      link: "bg-transparent underline-offset-4 hover:underline text-brand-black hover:text-brand-grey-dark p-0 h-auto active:scale-100 border-none",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-5 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    const content = (
      <>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {!isLoading && iconRight && <span className="shrink-0">{iconRight}</span>}
      </>
    );

    if (href) {
      return (
        <a href={href} className={cn(baseStyles, variants[variant], variant !== 'link' ? sizes[size] : '', className)}>
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(baseStyles, variants[variant], variant !== 'link' ? sizes[size] : '', className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
