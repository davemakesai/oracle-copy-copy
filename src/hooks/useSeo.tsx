import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_SEO } from '@/data/seoData.ts';

const DEFAULT_TITLE = 'Oracle Physiotherapy - Best Physiotherapy Clinic in Surat';
const DEFAULT_DESCRIPTION = 'Leading physiotherapy clinic in Surat, dedicated to helping you achieve pain-free living through expert care and modern treatment methods.';

/**
 * Custom hook to manage document title and meta description based on the current route.
 */
export const useSeo = () => {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();

  useEffect(() => {
    const seoConfig = PAGE_SEO[pathname as keyof typeof PAGE_SEO];

    const title = seoConfig?.title || DEFAULT_TITLE;
    const description = seoConfig?.description || DEFAULT_DESCRIPTION;

    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);

    // Update Open Graph Description (for social sharing)
    let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescriptionTag) {
      ogDescriptionTag = document.createElement('meta');
      ogDescriptionTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescriptionTag);
    }
    ogDescriptionTag.setAttribute('content', description);

    // Update Open Graph Title
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', title);

  }, [pathname]);
};