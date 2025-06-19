import { FilterStateI } from '@/app/feed/page';
import instance from './config';
import { PoseDataI, PoseFeedResponseI, PosePickResponseI, PoseTalkResponseI } from './type';

export const getPosePick = (peopleCount: number) =>
  instance.get<PosePickResponseI>(`/pose/pick/${peopleCount}`);

export const getPoseTalk = () => instance.get<PoseTalkResponseI>('/pose/talk');

export const getPoseFeed = ({ people, cut, tags }: FilterStateI) =>
  instance.get<PoseFeedResponseI>(`/pose`, {
    params: {
      people,
      cut,
      tag: tags.join(','),
    },
  });

export const getPoseDetail = (id: string) => instance.get<PoseDataI>(`/pose/${id}`);
