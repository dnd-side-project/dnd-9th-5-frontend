import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { PosePickResponse, PoseTalkResponse } from '.';
import publicApi from './config/publicApi';

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const getPoseDetail = (poseId: number) => publicApi.get(`/pose/${poseId}`);

export const getPoseTalk = () => publicApi.get<PoseTalkResponse>('/pose/talk');
