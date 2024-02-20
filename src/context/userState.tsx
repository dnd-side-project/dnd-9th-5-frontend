import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { RegisterResponse } from '@/apis';

const userAtom = atom<RegisterResponse>({ key: 'user', default: undefined });

export default function useUserState() {
  const getUserAtom = useRecoilValue(userAtom);
  const setUserAtom = useSetRecoilState(userAtom);

  const isLogin = getUserAtom === undefined;
  const userData = getUserAtom;
  const accessToken = () => getUserAtom.token.accessToken;
  const setUser = (data: RegisterResponse) => setUserAtom(data);

  return { isLogin, userData, accessToken, setUser };
}
