import { AuthActionType, AuthState, LOGIN } from "./types";

interface Reducer {}

const initState: AuthState = {
  user: {}
};

const auth = (
  state = initState.user,
  action: AuthActionType
): Record<string, string> => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN.START:
      localStorage.setItem("token", payload);
      return payload;
    default:
      return state;
  }
};

export default auth;
