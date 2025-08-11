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
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: payload.event,
      event_category: payload.category,
      event_label: payload.label,
      event_location: payload.location,
      page_path: payload.page || window.location.pathname,
      value: payload.value,
      ...payload,
    });
  } catch {
    // no-op
  }
};
