export type EventName =
  | 'click_cta_primary'
  | 'click_cta_secondary'
  | 'form_submit_success'
  | 'email_click'
  | 'calendar_click'
  | 'case_study_open'
  | 'pricing_view'
  | 'consultant_started'
  | 'consultant_proposal_shown'
  | 'consultant_contact_opened'
  | 'consultant_lead_submitted'
  | 'consultant_fallback_used';

export type CookieConsent = 'all' | 'necessary';
const CONSENT_KEY = 'cookie-consent';
let sessionConsent: CookieConsent | null = null;

export const getCookieConsent = (): CookieConsent | null => {
  if (typeof window === 'undefined') return null;
  if (sessionConsent !== null) return sessionConsent;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === 'all' || stored === 'necessary' ? stored : null;
  } catch {
    return null;
  }
};

export const hasAnalyticsConsent = () => getCookieConsent() === 'all';

export const openCookieSettings = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cookie-settings-open'));
  }
};

export const setCookieConsent = (consent: CookieConsent) => {
  if (typeof window === 'undefined') return;
  sessionConsent = consent;
  try {
    window.localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // Apply the choice for this visit even when persistent storage is blocked.
  }

  window.gtag?.('consent', 'update', {
    analytics_storage: consent === 'all' ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }));
};

export const trackEvent = (eventName: EventName, eventParams?: Record<string, unknown>) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
  }

  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;

  // One GA4 delivery path; do not also forward these events through GTM.
  window.gtag?.('event', eventName, eventParams);
  window.plausible?.(eventName, eventParams ? { props: eventParams } : undefined);
};
