export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (token) => ({
  type: USER_LOGIN,
  token
});