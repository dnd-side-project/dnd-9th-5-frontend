import { PageObjectResponse } from '@notionhq/client';
import { NextResponse } from 'next/server';

import { NOTION_DATABASE, notionClient } from '@/database';
import { ApiResponse, PoseTalkResponseI } from '@/server/type';

// region GET
export async function GET(): Promise<ApiResponse<PoseTalkResponseI>> {
  try {
    const response = await notionClient.databases.query({
      database_id: NOTION_DATABASE.talk,
    });

    const results = response.results;
    if (results.length === 0) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    const randomPage = results[Math.floor(Math.random() * results.length)] as PageObjectResponse;

    const keywordProps = randomPage.properties['keyword'];
    const idProps = randomPage.properties['id'];

    if (!('title' in keywordProps)) {
      return NextResponse.json({ error: 'No props : keyword' });
    }
    if (!('unique_id' in idProps)) {
      return NextResponse.json({ error: 'No props : id' });
    }

    const id = idProps.unique_id.number as number;
    const keyword = keywordProps.title[0].plain_text;

    return NextResponse.json({
      id,
      keyword,
    });
  } catch (error) {
    console.error('[NOTION_API_ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
