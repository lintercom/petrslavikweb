import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'onDark' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, iconLeft, iconRight, children, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-extrabold uppercase tracking-widest transition-[background-color,color,border-color,box-shadow,transform,gap] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-brand-white active:scale-[0.98] whitespace-nowrap border-2 border-transparent";
    
    const variants = {
      primary: "bg-brand-black text-brand-white border-brand-black hover:bg-brand-white hover:text-brand-black hover:shadow-[4px_4px_0px_0px_rgba(243,242,238,1),4px_4px_0px_2px_rgba(18,18,18,1)] hover:-translate-y-0.5 focus-visible:ring-brand-black",
      secondary: "bg-brand-white text-brand-black border-brand-black hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] hover:-translate-y-0.5 focus-visible:ring-brand-black",
      outline: "border-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white text-brand-black focus-visible:ring-brand-black",
      onDark: "border-brand-white bg-brand-white text-brand-black hover:bg-transparent hover:text-brand-white hover:shadow-[4px_4px_0px_0px_rgba(243,242,238,1)] hover:-translate-y-0.5 focus-visible:ring-brand-white ring-offset-brand-black",
      ghost: "bg-transparent hover:bg-brand-black hover:text-brand-white text-brand-black focus-visible:ring-brand-black border-transparent",
      link: "bg-transparent underline-offset-4 hover:underline text-brand-black hover:text-brand-grey-dark p-0 h-auto active:scale-100 border-none",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-5 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
      xl: "h-14 px-8 text-sm md:text-base gap-3",
    };

    const content = (
      <>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {!isLoading && iconRight && <span className="shrink-0">{iconRight}</span>}
      </>
    );
    const anchorProps = { ...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>) };
    const anchorPropsRecord = anchorProps as Record<string, unknown>;
    for (const key of ['disabled', 'type', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'value']) {
      delete anchorPropsRecord[key];
    }

    if (href) {
      const isInternal = href.startsWith('/');
      const defaultGtmProps = href === '/kontakt'
        ? {
            'data-gtm-event': 'cta_contact_click',
            'data-gtm-target': href,
          }
        : {};

      if (isInternal) {
        return (
          <Link
            to={href}
            className={cn(baseStyles, variants[variant], variant !== 'link' ? sizes[size] : '', className)}
            {...defaultGtmProps}
            {...anchorProps}
          >
            {content}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], variant !== 'link' ? sizes[size] : '', className)}
          {...defaultGtmProps}
          {...anchorProps}
        >
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
