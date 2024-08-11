"use client";
import { jwtDecode } from "jwt-decode";
import http from "./httpService";
import { BACKEND_URL, REFRESH_TOKEN, TOKEN } from "../constants/config";

// Utility function to check if we're on the client side
const isClient = typeof window !== "undefined";

async function login(data) {
  return await http.post(`${BACKEND_URL}/users/login/`, data);
}

async function register(data) {
  return await http.post(`${BACKEND_URL}/users/register/`, data);
}

function logout() {
  if (isClient) {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }
  return;
}

function setToken(token) {
  if (isClient) {
    localStorage.setItem(TOKEN, token);
  }
  return;
}

function setRefreshToken(token) {
  if (isClient) {
    localStorage.setItem(REFRESH_TOKEN, token);
  }
  return;
}

function getToken() {
  return isClient ? localStorage.getItem(TOKEN) : null;
}

function getRefreshToken() {
  return isClient ? localStorage.getItem(REFRESH_TOKEN) : null;
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
