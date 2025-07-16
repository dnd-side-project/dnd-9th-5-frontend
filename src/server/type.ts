import { NextResponse } from 'next/server';

// region response
type ApiErrorT = {
  error: string;
};

export type ApiResponse<T> = NextResponse<ApiErrorT> | NextResponse<T>;

// region interface
export interface PoseTalkResponseI {
  id: number;
  keyword: string;
}

export interface PosePickResponseI {
  imageUrl: string;
}
export interface PoseDataI {
  id: string;
  image: string;
  people: number;
  cut: number;
  tags: string[] | null;
  source: string | null;
  sourceUrl: string | null;
  bookmarkCheck?: boolean;
}

export interface PoseFeedResponseI {
  pagination: {
    hasMore: boolean;
    nextCusor: string | null;
  };
  contents: PoseDataI[];
}
