import instance from './config';
import { PoseDataI, PoseFeedResponseI, PosePickResponseI, PoseTalkResponseI } from './type';
import { FilterStateI } from '@/app/feed/page';

export const getPosePick = (peopleCount: number) =>
  instance.get<PosePickResponseI>(`/pose/pick/${peopleCount}`);

export const getPoseTalk = () => instance.get<PoseTalkResponseI>('/pose/talk');

export const getPoseFeed = ({ people, cut, tags }: FilterStateI, next: string | null) =>
  instance.get<PoseFeedResponseI>(`/pose`, {
    params: {
      people,
      cut,
      tag: tags.join(','),
      cursor: next,
    },
  });

export const getPoseDetail = (id: string) => instance.get<PoseDataI>(`/pose/${id}`);
