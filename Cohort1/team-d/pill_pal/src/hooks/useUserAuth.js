import { useContext } from 'react';

import { UserAuthContext } from '../context/UserAuthContext';

export const useUserAuth = () => {
  const userAuth = useContext(UserAuthContext);

  return userAuth;
};
