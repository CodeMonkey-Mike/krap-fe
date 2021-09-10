import { createContext } from 'react';
import { IState, IAction } from './provider';

interface IAuthContext {
  state: IState;
  dispatch: ({ type, payload }: IAction) => any;
}

export const AuthContext = createContext({} as IAuthContext);
