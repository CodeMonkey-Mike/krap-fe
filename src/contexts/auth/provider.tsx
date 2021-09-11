import React, { useReducer } from 'react';
import { AuthContext } from './context';

export interface IState {
  isAuthenticated: boolean;
  user: any;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
};

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload || null,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
