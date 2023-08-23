import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { FilterTagsResponse, PoseFeedResponse, PosePickResponse, PoseTalkResponse } from '.';
import publicApi from './config/publicApi';

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const getPoseDetail = (poseId: number) => publicApi.get(`/pose/${poseId}`);

export const getPoseTalk = () => publicApi.get<PoseTalkResponse>('/pose/talk');

export const getPoseFeed = (frameCount: number, peopleCount: number, tags: string) =>
  publicApi.get<PoseFeedResponse>(`/pose`, {
    params: {
      frameCount,
      pageNumber: 0,
      peopleCount,
      tags,
    },
  });

export const getFilterTag = () => publicApi.get<FilterTagsResponse>('/pose/tags');
