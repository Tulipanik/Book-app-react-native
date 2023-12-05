import * as authService from "../.Shared/authService";

export const login = () => {
  authService.getToken();
};

export const register = (user) => {
  authService.register(user);
};
