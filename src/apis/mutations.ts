import { useMutation } from '@tanstack/react-query';

import { postRegister } from '.';

export const useRegisterMutation = () => useMutation(postRegister);
