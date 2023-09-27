import {
  FilterTagsResponse,
  PoseDetailResponse,
  PoseFeedResponse,
  PosePickResponse,
  PoseTalkResponse,
} from '.';
import publicApi from './config/publicApi';

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

export const postRegister = () => publicApi.post('/users/register');
