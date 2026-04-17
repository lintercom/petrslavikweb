import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-brand-white text-brand-black">
          <div className="text-center max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6">
              Něco se pokazilo.
            </h1>
            <p className="text-lg text-brand-grey-dark mb-10 leading-relaxed">
              Omlouvám se za nepříjemnost. Zkuste stránku obnovit nebo se vrátit na úvod.
            </p>
            <a
              href="/"
              className="inline-block bg-brand-black text-brand-white px-10 py-5 font-extrabold uppercase tracking-widest text-sm hover:shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-shadow duration-300 border-2 border-brand-black"
            >
              Zpět na úvod
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
