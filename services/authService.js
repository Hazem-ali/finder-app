import http from "./httpService";
import { BACKEND_URL, TOKEN_NAME } from "../constants/config";

async function login(data) {
  return await http.post(`${BACKEND_URL}/users/login/`, data);
}

async function register(data) {
  return await http.post(`${BACKEND_URL}/users/register/`, data);
}

function logout() {
  localStorage.removeItem(TOKEN_NAME);
  return;
}
function setToken(token) {
  localStorage.setItem(TOKEN_NAME, token);
  return;
}
function getToken() {
  return window ? window.localStorage.getItem(TOKEN_NAME) : null;
}

function isAuthenticated() {
  return getToken() ? true : false;
}

export default {
  login,
  register,
  logout,
  setToken,
  getToken,
  isAuthenticated,
};
