import instance from './config';
import { PoseFeedResponseI, PosePickResponseI, PoseTalkResponseI } from './type';

export const getPosePick = (peopleCount: number) =>
  instance.get<PosePickResponseI>(`/pose/pick/${peopleCount}`);

export const getPoseTalk = () => instance.get<PoseTalkResponseI>('/pose/talk');

export const getPoseFeed = (people: number, cut: number, tags: string) =>
  instance.get<PoseFeedResponseI>(`/pose`, {
    params: {
      people,
      cut,
      tags,
    },
  });
