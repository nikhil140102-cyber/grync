// lib/gtag.js
export const GA_TRACKING_ID = 'G-ZLN02D1TK3';

// Track page views
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};
