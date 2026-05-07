export type EventName =
  | 'click_cta_primary'
  | 'click_cta_secondary'
  | 'form_submit'
  | 'form_submit_success'
  | 'email_click'
  | 'calendar_click'
  | 'case_study_open'
  | 'pricing_view';

const CONSENT_KEY = 'cookie-consent';

export const hasAnalyticsConsent = () => {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(CONSENT_KEY) === 'all';
};

export const setCookieConsent = (consent: 'all' | 'necessary') => {
  window.localStorage.setItem(CONSENT_KEY, consent);

  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: consent === 'all' ? 'granted' : 'denied',
    });
  }

  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }));
};

export const trackEvent = (eventName: EventName, eventParams?: Record<string, unknown>) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
  }

  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;

  window.dataLayer?.push({ event: eventName, ...eventParams });
  window.gtag?.('event', eventName, eventParams);
  window.plausible?.(eventName, eventParams ? { props: eventParams } : undefined);
};
