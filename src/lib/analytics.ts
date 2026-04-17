export type EventName = 
  | 'click_cta_primary'
  | 'click_cta_secondary'
  | 'form_submit'
  | 'calendar_click'
  | 'case_study_open'
  | 'pricing_view';

export const trackEvent = (eventName: EventName, eventParams?: Record<string, any>) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
  }
  // Here you would normally push to dataLayer or call GA4/Plausible/etc.
  // if (typeof window !== 'undefined' && window.dataLayer) {
  //   window.dataLayer.push({ event: eventName, ...eventParams });
  // }
};
