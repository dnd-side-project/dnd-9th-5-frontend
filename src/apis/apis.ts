import {
  FilterTagsResponse,
  PoseDetailResponse,
  PoseFeedContents,
  PoseFeedResponse,
  PosePickResponse,
  PoseTalkResponse,
  RegisterResponse,
} from '.';
import privateApi from './config/privateApi';
import publicApi from './config/publicApi';
import { KAKAO_REDIRECT_URI } from '@/constants/env';

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const getPoseDetail = (poseId: number) =>
  publicApi.get<PoseDetailResponse>(`/pose/${poseId}`);

export const getPoseTalk = () => publicApi.get<PoseTalkResponse>('/pose/talk');

export const getPoseFeed = async (
  peopleCount: number,
  frameCount: number,
  tags: string,
  pageNumber: number
) =>
  await privateApi.get<PoseFeedResponse>(`/pose`, {
    params: {
      frameCount,
      pageNumber,
      peopleCount,
      tags,
    },
  });

export const getFilterTag = () => publicApi.get<FilterTagsResponse>('/pose/tags');

export const getRegister = (code: string) =>
  publicApi.get<RegisterResponse>(
    `/users/login/oauth/kakao?code=${code}&redirectURI=${KAKAO_REDIRECT_URI}`
  );

export const patchLogout = (accessToken: string, refreshToken: string) =>
  publicApi.patch('/users/logout', {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: `Bearer ${refreshToken}`,
  });

export const patchDeleteAccount = (
  accessToken: string,
  refreshToken: string,
  withdrawalReason: string
) =>
  publicApi.patch('/users/deleteAccount', {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: `Bearer ${refreshToken}`,
    withdrawalReason,
  });

export const postBookmark = (poseId: number) =>
  privateApi.post(`/bookmark`, null, {
    params: { poseId },
  });

export const deleteBookmark = (poseId: number) =>
  privateApi.delete(`/bookmark`, {
    params: { poseId },
  });

export const getBookmarkFeed = (pageNumber: number) =>
  privateApi.get<PoseFeedContents>('/bookmark/feed', {
    params: { pageNumber, pageSize: 10 },
  });
