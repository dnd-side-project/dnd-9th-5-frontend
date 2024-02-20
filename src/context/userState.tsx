import { atom } from 'recoil';

import { RegisterResponse } from '@/apis';

export const userAtom = atom<RegisterResponse>({ key: 'user' });
