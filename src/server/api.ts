import instance from './config';
import { PosePickResponseI, PoseTalkResponseI } from './type';

export const getPosePick = (peopleCount: number) =>
  instance.get<PosePickResponseI>(`/pose/pick/${peopleCount}`);
export const getPoseTalk = () => instance.get<PoseTalkResponseI>('/pose/talk');
