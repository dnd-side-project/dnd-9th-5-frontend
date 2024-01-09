import { atom } from 'recoil';

import { RegisterResponse } from '@/apis';

export const isLoginAtom = atom<boolean>({ key: 'isLogin', default: false });
export const userAtom = atom<RegisterResponse>({ key: 'user' });
