export type AnalyticsPayload = {
  event: string;
  category?: string;
  label?: string;
  location?: string;
  page?: string;
  value?: number;
  [key: string]: any;
};

export const track = (payload: AnalyticsPayload) => {
  try {
    // Check for analytics consent before tracking
    const consent = localStorage.getItem('cookie-consent');
    if (!consent || consent === 'rejected') {
      console.log('Analytics tracking blocked - no consent');
      return;
    }

    if (consent !== 'all' && consent !== 'analytics') {
      console.log('Analytics tracking blocked - insufficient consent level');
      return;
    }

    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    const { event, category, label, location, page, value, ...rest } = payload;
    w.dataLayer.push({
      event,
      event_category: category,
      event_label: label,
      event_location: location,
      page_path: page || window.location.pathname,
      value,
      ...rest,
    });
  } catch {
    // no-op
  }
};

/**
 * Track Facebook Pixel events (for marketing consent)
 */
export const trackFacebook = (event: string, parameters?: Record<string, any>) => {
  try {
    // Check for marketing consent
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== 'all') {
      console.log('Facebook tracking blocked - no marketing consent');
      return;
    }

    const w = window as any;
    if (w.fbq) {
      w.fbq('track', event, parameters);
    }
  } catch {
    // no-op
  }
};
