let token = null;

const setUser = (user) => {
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

const getToken = () => token;

export default { setUser, getUser, getToken };