import { NextResponse } from 'next/server';

type ApiErrorT = {
  error: string;
};

export type ApiResponse<T> = NextResponse<ApiErrorT> | NextResponse<T>;

export interface PoseTalkResponseI {
  id: number;
  keyword: string;
}
