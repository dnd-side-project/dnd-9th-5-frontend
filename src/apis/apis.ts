import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { PoseFeedParameter, PoseFeedResponse, PosePickResponse, PoseTalkResponse } from '.';
import publicApi from './config/publicApi';

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const getPoseDetail = (poseId: number) => publicApi.get(`/pose/${poseId}`);

export const getPoseTalk = () => publicApi.get<PoseTalkResponse>('/pose/talk');

export const getPoseFeed = ({ frameCount, peopleCount, tags }: PoseFeedParameter) =>
  publicApi.get<PoseFeedResponse>(`/pose`, {
    params: {
      frameCount,
      pageNumber: 1,
      pageSize: 10,
      peopleCount,
      tags,
    },
  });
