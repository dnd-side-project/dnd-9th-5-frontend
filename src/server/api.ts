import instance from './config';
import { PoseTalkResponseI } from './type';

export const getPoseTalk = () => instance.get<PoseTalkResponseI>('/pose/talk');
