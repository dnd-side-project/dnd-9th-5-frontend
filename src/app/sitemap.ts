import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.posepicker.site/pick',
    },
    {
      url: 'https://www.posepicker.site/talk',
    },
    {
      url: 'https://www.posepicker.site/feed',
    },
  ];
}
