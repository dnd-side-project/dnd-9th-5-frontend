import {
  FilterTagsResponse,
  PoseDetailResponse,
  PoseFeedContents,
  PoseFeedResponse,
  PosePickResponse,
  PoseTalkResponse,
  RegisterResponse,
} from '.';
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
  await publicApi.get<PoseFeedResponse>(`/pose`, {
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

export const postBookmark = (accesstoken: string, poseId: number) =>
  publicApi.post(`/bookmark`, null, {
    params: { poseId },
    headers: { Authorization: `Bearer ${accesstoken}` },
  });

export const deleteBookmark = (accesstoken: string, poseId: number) =>
  publicApi.delete(`/bookmark`, {
    params: { poseId },
    headers: { Authorization: `Bearer ${accesstoken}` },
  });

export const getBookmarkFeed = (accesstoken: string, pageNumber: number) =>
  publicApi.get<PoseFeedContents>('/bookmark/feed', {
    headers: { Authorization: `Bearer ${accesstoken}` },
    params: { pageNumber, pageSize: 10 },
  });
