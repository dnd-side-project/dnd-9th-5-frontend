import { getPoseFeed } from '@/shared';
import { URL } from '@/shared';

export default async function sitemap() {
  const baseUrl = URL.site;

  const {
    filteredContents: { content },
  } = await getPoseFeed(0, 0, '', 0);
  const detailUrls = content.map(({ poseInfo }) => ({
    url: `${baseUrl}/detail/${poseInfo.poseId}`,
    lastModified: poseInfo.updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/pick`, lastModified: new Date() },
    { url: `${baseUrl}/talk`, lastModified: new Date() },
    { url: `${baseUrl}/feed`, lastModified: new Date() },
    ...detailUrls,
  ];
}
