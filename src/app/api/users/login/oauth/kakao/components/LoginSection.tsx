// 'use client';

// import { useRouter } from 'next/navigation';
// import { useSetRecoilState } from 'recoil';

// import { useRegisterQuery } from '@/apis';
// import { Loading } from '@/components/Loading';
// import { isLoginAtom, userAtom } from '@/context/userState';
// import { setCookie } from '@/utils/cookieController';

// interface LoginSectionProps {
//   code: string;
// }
// export default function LoginSection({ code }: LoginSectionProps) {
//   const router = useRouter();
//   const { data } = useRegisterQuery(code);
//   console.log(data);

//   const setLoginState = useSetRecoilState(isLoginAtom);
//   const setUserState = useSetRecoilState(userAtom);
//   setLoginState(true);
//   setUserState(data);

//   const { token } = data;
//   const { accessToken, refreshToken } = token;
//   setCookie('accessToken', accessToken);
//   setCookie('refreshToken', refreshToken);
//   router.replace('/menu');

//   return <Loading />;
// }
