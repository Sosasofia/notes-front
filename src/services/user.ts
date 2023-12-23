import { User } from "@/types";

let token: string | null = null;

const setUser = (user: User) => {
  window.localStorage.setItem("loggedUserInfo", JSON.stringify(user));
  token = user.token;
};

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem("loggedUserInfo");
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    token = user.token;
    return user;
  }
  return null;
};

const logout = () => {
  window.localStorage.removeItem("loggedUserInfo");
  token = null;
};

const getToken = () => token;

export default { setUser, getUser, getToken, logout };
