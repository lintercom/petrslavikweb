import { Globe, ShoppingCart, Smartphone, Link2, LineChart, Zap, ShieldCheck, Wrench, FileText, Settings, Sparkles, TrendingUp } from 'lucide-react';

export const Icons = {
  Web: Globe,
  EShop: ShoppingCart,
  App: Smartphone,
  Integrace: Link2,
  Analytika: LineChart,
  Rychlost: Zap,
  Bezpecnost: ShieldCheck,
  Servis: Wrench,
  Obsah: FileText,
  Automatizace: Settings,
  AI: Sparkles,
  Rust: TrendingUp,
};

export function IllustrationHero({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="400" rx="40" fill="#F8FAFC" />
      <path d="M100 150C100 122.386 122.386 100 150 100H250C277.614 100 300 122.386 300 150V250C300 277.614 277.614 300 250 300H150C122.386 300 100 277.614 100 250V150Z" fill="#E2E8F0" />
      <rect x="140" y="140" width="120" height="120" rx="20" fill="#3B82F6" />
      <circle cx="200" cy="200" r="30" fill="white" />
      <path d="M200 170V230M170 200H230" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
      <circle cx="120" cy="120" r="12" fill="#10B981" />
      <circle cx="280" cy="280" r="16" fill="#F59E0B" />
      <circle cx="280" cy="120" r="8" fill="#EF4444" />
    </svg>
  );
}

export function IllustrationProcess({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="400" rx="40" fill="#F8FAFC" />
      <path d="M80 200L160 120L240 200L320 120" stroke="#3B82F6" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 280L160 200L240 280L320 200" stroke="#93C5FD" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="120" r="16" fill="#10B981" />
      <circle cx="240" cy="200" r="16" fill="#3B82F6" />
      <circle cx="320" cy="120" r="16" fill="#F59E0B" />
    </svg>
  );
}

export function IllustrationIntegration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="400" rx="40" fill="#F8FAFC" />
      <rect x="80" y="160" width="80" height="80" rx="16" fill="#3B82F6" />
      <rect x="240" y="160" width="80" height="80" rx="16" fill="#10B981" />
      <path d="M160 200H240" stroke="#94A3B8" strokeWidth="8" strokeDasharray="8 8" />
      <path d="M220 180L240 200L220 220" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="160" y="80" width="80" height="40" rx="8" fill="#F59E0B" />
      <path d="M200 120V160" stroke="#94A3B8" strokeWidth="4" />
      <rect x="160" y="280" width="80" height="40" rx="8" fill="#EF4444" />
      <path d="M200 240V280" stroke="#94A3B8" strokeWidth="4" />
    </svg>
  );
}
