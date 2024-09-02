"use client";
import http from "./httpService";
import auth from "./authService";
import { BACKEND_URL } from "../constants/config";
const Authorization = `Bearer ${auth.getToken()}`;

async function findByNameOrNationalId(searchInput) {
  return await http.get(`${BACKEND_URL}/contacts/search/`, {
    params: { search: searchInput },
    // headers: { Authorization },
  });
}

async function findByImage(image) {
  return null;
  // return await http.post(`${BACKEND_URL}/contacts/`, data, {
  //   headers: { Authorization },
  // });
}

export default {
  findByNameOrNationalId,
  findByImage,
};
