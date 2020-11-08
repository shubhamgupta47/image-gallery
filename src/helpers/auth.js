import cookie from "js-cookie";

// save in cookie
export const setCookie = (key, value) => {
  cookie.set(key, value, {
    expires: 1,
  });
};

// remove from cookie
export const removeCookie = (key) => {
  cookie.remove(key);
};

// get from cookie
export const getCookie = (key, req) => {
  return cookie.get(key);
};

// save in localStorage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// remove from localStorage
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// authenticate user by passing data to cookie and localStorage during signin
export const authenticate = (response, callback) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  callback();
};

// access user info from localStorage
export const getUserInfo = () => {
  const cookieChecked = getCookie("token");
  if (cookieChecked) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
};

// logout
export const logout = (history) => {
  removeCookie("token");
  removeLocalStorage("user");
  history.push("/login");
};
