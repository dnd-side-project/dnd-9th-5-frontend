import { BlockObjectResponse } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

import { NOTION_DATABASE, notionClient } from '@/server/database';
import { ApiResponse, PosePickResponseI } from '@/server/type';

const PAGE_SIZE = 10;

interface Params {
  peopleCount: string;
}

// region GET
export async function GET(
  req: NextRequest,
  { params: { peopleCount } }: { params: Params }
): Promise<ApiResponse<PosePickResponseI>> {
  try {
    const response = await notionClient.databases.query({
      database_id: NOTION_DATABASE.data,
      page_size: PAGE_SIZE,
      filter: {
        property: 'people',
        number: {
          equals: parseInt(peopleCount),
        },
      },
    });
    const resultPages = response.results;

    if (resultPages.length === 0) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    const RANDOM_INDEX = Math.floor(Math.random() * resultPages.length);
    const randomPage = resultPages[RANDOM_INDEX];

    const contentBlocks = (
      await notionClient.blocks.children.list({
        block_id: randomPage.id,
      })
    ).results as BlockObjectResponse[];

    const imageBlock = contentBlocks.find((block) => block.type === 'image');

    if (!(imageBlock && 'image' in imageBlock && 'file' in imageBlock.image)) {
      return NextResponse.json({ error: `No Image : ${randomPage.id}` }, { status: 500 });
    }

    const imageUrl = imageBlock.image.file.url;

    return NextResponse.json({
      imageUrl,
    });
  } catch (error) {
    console.error('[NOTION_API_ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
