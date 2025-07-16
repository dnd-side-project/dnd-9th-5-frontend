import { PageObjectResponse } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

import { NOTION_DATABASE, notionClient } from '@/server/database';
import { ApiResponse, PoseDataI } from '@/server/type';
import { refinePoseDataFromPage } from '@/server/utils';

interface Params {
  id: string;
}

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: Params }
): Promise<ApiResponse<PoseDataI>> {
  try {
    const response = await notionClient.databases.query({
      database_id: NOTION_DATABASE.data,
      filter: { property: 'id', unique_id: { equals: parseInt(id) } },
      page_size: 10,
    });

    const results = response.results as PageObjectResponse[];

    if (results.length === 0) {
      return NextResponse.json({ error: `No Data : ${id}` }, { status: 400 });
    }

    const data = await refinePoseDataFromPage(results[0]);

    if (!data) {
      return NextResponse.json({ error: `No Image : ${id}` }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('[NOTION_API_ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
