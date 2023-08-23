import { PoseDetailResponse, PosePickResponse, PoseTalkResponse } from '.';
import publicApi from './config/publicApi';

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const getPoseDetail = (poseId: number) =>
  publicApi.get<PoseDetailResponse>(`/pose/${poseId}`);

export const getPoseTalk = () => publicApi.get<PoseTalkResponse>('/pose/talk');
