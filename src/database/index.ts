import { Client } from '@notionhq/client';

export const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export const NOTION_DATABASE = {
  talk: process.env.NOTION_DATABASE_KEY_POSETALK || '',
} as const;
