interface SeoEntry {
  title: string;
  description: string;
}

const CLINIC_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "S-9 Spereza Business Hub, Opp. Suryam Residency, Pal",
  "addressLocality": "Surat",
  "addressRegion": "Gujarat",
  "postalCode": "395009",
  "addressCountry": "IN"
};

const CLINIC_HOURS = [
  "Mo-Sa 09:00-13:00",
  "Mo-Sa 16:00-20:00"
];

export const PAGE_SEO: Record<string, SeoEntry> = {
  '/': {
    title: 'Oracle Physiotherapy - Best Physiotherapy Clinic in Surat',
    description: 'Surat’s leading physiotherapy clinic. We offer expert pain relief, injury rehabilitation, and personalized care to help you move better and live stronger.',
  },
  '/about': {
    title: 'About Dr. Amit Mehta | Best physiotherapist in Surat',
    description: 'Learn about Dr. Amit Mehta, our mission, and our commitment to providing personalized, evidence-based orthopedic physiotherapy care in Surat since 2019.',
  },
  '/services': {
    title: 'Best Physiotherapy Services near me | Oracle Physiotherapy',
    description: 'Explore our comprehensive range of services including pain relief, sports injury rehab, orthopedic therapy, sciatica treatment, and home visits.',
  },
  '/contact': {
    title: 'Contact Oracle Physiotherapy | Book Appointment',
    description: 'Get in touch with Oracle Physiotherapy Clinic to schedule your consultation. Find our clinic location, working hours, phone number, and email.',
  },
  '/gallery': {
    title: 'Clinic Gallery | Oracle Physiotherapy Facilities & Equipment',
    description: 'View photos of our modern, state-of-the-art physiotherapy clinic, equipment, and treatment sessions in Surat.',
  },
  '/team': {
    title: 'Meet Our Expert Physiotherapy Team | Oracle Physiotherapy',
    description: 'Meet the dedicated and experienced team of certified physiotherapists at Oracle Physiotherapy, led by Dr. Amit Mehta.',
  },
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physiotherapist",
      "name": "Dr. Amit Mehta",
      "url": "https://yourdomain.com/about",
      "image": "https://i.postimg.cc/Qdp6dLb2/image.png",
      "alumniOf": "Gujarat University",
      "jobTitle": "Lead Physiotherapist & Clinic Director",
      "worksFor": {
        "@type": "Organization",
        "name": "Oracle Physiotherapy"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Oracle Physiotherapy",
      "image": "https://i.postimg.cc/Qdp6dLb2/image.png",
      "url": "https://yourdomain.com",
      "telephone": "+919537249333",
      "email": "mailto:oraclephysiocare@gmail.com",
      "priceRange": "$$",
      "address": CLINIC_ADDRESS,
      "openingHoursSpecification": CLINIC_HOURS,
      "servesCuisine": "Physiotherapy",
      "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.974397905821!2d72.7786317097256!3d21.193175982031978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dff20d4106b%3A0x9457afb54f420541!2sOracle%20Physiotherapy%20clinic%20-Sports%20Rehabilitation%2FOrthopedic%2FSpine%20Physiotherapy%2FBest%20Physiotherapy%2FBest%20Physiotherapy%20in%20Surat!5e0!3m2!1sen!2sin!4v1753875764646!5m2!1sen!2sin",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.193276",
        "longitude": "72.781227"
      }
    }
  ]
};