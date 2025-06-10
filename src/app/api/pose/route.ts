import { PageObjectResponse } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

import { NOTION_DATABASE, notionClient } from '@/database';
import { ApiResponse, PoseDataI, PoseFeedResponseI } from '@/server/type';
import { refinePoseDataFromPage } from '@/server/utils';

// region GET
export async function GET(req: NextRequest): Promise<ApiResponse<PoseFeedResponseI>> {
  const searchParams = req.nextUrl.searchParams;

  const people = searchParams.get('people');
  const cut = searchParams.get('cut');
  const tags = searchParams.get('tags')?.split(',');

  const andFilters = [];
  if (people && people !== '0') {
    andFilters.push({
      property: 'people',
      number: {
        equals: parseInt(people),
      },
    });
  }
  if (cut && cut !== '0') {
    andFilters.push({
      property: 'cut',
      number: {
        equals: parseInt(cut),
      },
    });
  }
  if (tags && tags.length > 0) {
    andFilters.push({
      or: tags.map((tag) => ({
        property: 'tags',
        multi_select: {
          contains: tag,
        },
      })),
    });
  }

  try {
    const response = await notionClient.databases.query({
      database_id: NOTION_DATABASE.data,
      filter: { and: andFilters },
      page_size: 10,
    });

    let contents: PoseDataI[] = [];
    const resultPages = response.results as PageObjectResponse[];

    for (const page of resultPages) {
      const content = refinePoseDataFromPage(page);

      if (content === null) {
        continue;
      }

      contents.push(content);
    }

    return NextResponse.json({
      contents,
    });
  } catch (error) {
    console.error('[NOTION_API_ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
