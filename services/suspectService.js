import http from "./httpService";
import auth from "./authService";
import { BACKEND_URL } from "../constants/config";

const Authorization = `Bearer ${auth.getToken()}`;

async function createSuspectService(data) {
  return await http.post(`${BACKEND_URL}/suspects/`, data, {
    headers: { Authorization },
  });
}

async function getSuspectListService() {
  return await http.get(`${BACKEND_URL}/suspects/`, {
    headers: { Authorization },
  });
}

export default {
  createSuspectService,
  getSuspectListService,
};
