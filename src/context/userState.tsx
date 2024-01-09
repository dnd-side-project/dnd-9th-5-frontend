import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { RegisterResponse } from '@/apis';

const isLoginAtom = atom<boolean>({ key: 'isLogin', default: false });
const userAtom = atom<RegisterResponse>({ key: 'user' });

export default function useUserState() {
  const loginState = useRecoilValue(isLoginAtom);
  const setLoginState = useSetRecoilState(isLoginAtom);

  const userState = useRecoilValue(userAtom);
  const setUserState = useSetRecoilState(userAtom);

  return { loginState, setLoginState, userState, setUserState };
}
