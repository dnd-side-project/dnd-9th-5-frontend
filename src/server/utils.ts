import {
  FilesPropertyItemObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  NumberPropertyItemObjectResponse,
  PageObjectResponse,
  UniqueIdPropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { PoseDetailResponseI } from './type';

export function refinePoseDataFromPage(page: PageObjectResponse): PoseDetailResponseI | null {
  const idProps = page.properties['id'] as UniqueIdPropertyItemObjectResponse;
  const imageProps = page.properties['image'] as FilesPropertyItemObjectResponse;
  const peopleProps = page.properties['people'] as NumberPropertyItemObjectResponse;
  const cutProps = page.properties['cut'] as NumberPropertyItemObjectResponse;
  const tagsProps = page.properties['tags'] as MultiSelectPropertyItemObjectResponse;
  const sourceProps = page.properties['source'];
  const sourceUrlProps = page.properties['source_url'] as UrlPropertyItemObjectResponse;

  const imageFile = imageProps.files[0];

  if (!(imageFile && 'file' in imageFile && 'url' in imageFile.file)) {
    console.error(`No Image : ${idProps.unique_id.number}`);
    return null;
  }

  return {
    id: idProps.unique_id.number + '',
    image: imageFile.file.url,
    people: peopleProps.number ?? 0,
    cut: cutProps.number ?? 0,
    tags: tagsProps.multi_select.map((tag) => tag.name).join(','),
    source: sourceProps.id,
    sourceUrl: sourceUrlProps.url,
  };
}
