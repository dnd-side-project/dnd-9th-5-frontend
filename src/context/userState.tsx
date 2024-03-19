import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { RegisterResponse } from '@/apis';

const { persistAtom } = recoilPersist();

const userAtom = atom<RegisterResponse | null>({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default function useUserState() {
  const getUserAtom = useRecoilValue(userAtom);
  const setUserAtom = useSetRecoilState(userAtom);

  const isLogin = getUserAtom !== null;
  const userData = getUserAtom;
  const accessToken = getUserAtom?.token.accessToken;
  const setUser = (data: RegisterResponse) => setUserAtom(data);
  const clearUser = () => setUserAtom(null);

  return { isLogin, userData, accessToken, setUser, clearUser };
}
