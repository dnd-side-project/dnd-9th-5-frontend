import Script from 'next/script';

import { JSON_LD } from '@/constants';

export default function JsonLD() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(JSON_LD),
      }}
    />
  );
}
