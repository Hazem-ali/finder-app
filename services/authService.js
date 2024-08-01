import {jwtDecode} from "jwt-decode";

import http from "./httpService";
import { BACKEND_URL, REFRESH_TOKEN, TOKEN } from "../constants/config";

async function login(data) {
  return await http.post(`${BACKEND_URL}/users/login/`, data);
}

async function register(data) {
  return await http.post(`${BACKEND_URL}/users/register/`, data);
}

function logout() {
  localStorage.removeItem(TOKEN);
  return;
}
function setToken(token) {
  localStorage.setItem(TOKEN, token);
  return;
}
function setRefreshToken(token) {
  localStorage.setItem(TOKEN, token);
  return;
}
function getToken() {
  return window ? window.localStorage.getItem(TOKEN) : null;
}
function getRefreshToken() {
  return window ? window.localStorage.getItem(REFRESH_TOKEN) : null;
}

function isAuthenticated() {
  const token = getToken();
  if (!token) return false;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
}

export default {
  login,
  register,
  logout,
  setToken,
  setRefreshToken,
  getToken,
  getRefreshToken,
  isAuthenticated,
};
