import {
  FilesPropertyItemObjectResponse,
  FormulaPropertyItemObjectResponse,
  NumberPropertyItemObjectResponse,
  PageObjectResponse,
  UniqueIdPropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

import { PoseDataI } from './type';

export function refinePoseDataFromPage(page: PageObjectResponse): PoseDataI | null {
  const idProps = page.properties['id'] as UniqueIdPropertyItemObjectResponse;
  const imageProps = page.properties['image'] as FilesPropertyItemObjectResponse;
  const peopleProps = page.properties['people'] as NumberPropertyItemObjectResponse;
  const cutProps = page.properties['cut'] as NumberPropertyItemObjectResponse;
  const sourceUrlProps = page.properties['source_url'] as UrlPropertyItemObjectResponse;

  const imageFile = imageProps.files[0];
  if (!(imageFile && 'file' in imageFile && 'url' in imageFile.file)) {
    console.error(`No Image : ${idProps.unique_id.number}`);
    return null;
  }

  const tagProps = page.properties['tag'] as FormulaPropertyItemObjectResponse;
  const tagString = tagProps.formula.type === 'string' ? tagProps.formula.string : null;
  const tags = tagString ? tagString.split(',').filter((tag) => tag.trim() !== '') : null;

  const sourceProps = page.properties['source'] as FormulaPropertyItemObjectResponse;
  const source =
    sourceProps.formula.type === 'string' && sourceProps.formula.string?.trim()
      ? sourceProps.formula.string
      : null;

  return {
    id: idProps.unique_id.number + '',
    image: imageFile.file.url,
    people: peopleProps.number ?? 0,
    cut: cutProps.number ?? 0,
    tags,
    source,
    sourceUrl: sourceUrlProps.url,
  };
}
