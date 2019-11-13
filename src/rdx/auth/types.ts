export const LOGIN = {
  START: "LOGIN_START",
  SUCCESS: "LOGIN_SUCCESS",
  ERROR: "LOGIN_ERROR"
};

interface LoginAction {
  type: string;
  payload: any;
}

interface Action {
  type: string;
}

export type AuthState = {
  user: Record<string, string>;
};

export type AuthActionType = LoginAction;
