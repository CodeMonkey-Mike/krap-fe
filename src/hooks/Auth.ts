import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';
import { Routes } from 'src/contants';
import { AuthContext } from 'src/contexts';

export const useAuth = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(AuthContext);
  const onLogout = () => {
    dispatch({ type: 'SIGN_OUT' });
    router.replace(Routes.Home);
  };
  const isLoggedIn = useMemo(() => state.isAuthenticated && !!state.user, [state]);
  const user = useMemo(() => state.user, [state]);

  return {
    isLoggedIn,
    user,
    onLogout,
  };
};
