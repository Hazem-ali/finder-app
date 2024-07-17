import http from "./httpService";
import { BACKEND_URL } from "../constants/config";

async function login(data) {
  return await http.post(`${BACKEND_URL}/users/login/`, data);
}

async function register(data) {
  return await http.post(`${BACKEND_URL}/users/register/`, data);
}

export default {
  login,
  register,
};
