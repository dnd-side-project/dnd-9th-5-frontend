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
export interface PoseDataResponseI {
  poseId: number;
  frameCount: number;
  peopleCount: number;
  imageUrl: string;
  source: string;
  sourceUrl: string;
  tagAttributes: string;
  updatedAt: string;
  bookmarkCheck: boolean;
}
