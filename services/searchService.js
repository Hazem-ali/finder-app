"use client";
import http from "./httpService";
import auth from "./authService";
import { BACKEND_URL } from "../constants/config";
const Authorization = `Bearer ${auth.getToken()}`;

async function findById(id) {
  return await http.get(`${BACKEND_URL}/contacts/${id}`, {
    // headers: { Authorization },
  });
}
async function findByNameOrNationalId(searchInput) {
  return await http.get(`${BACKEND_URL}/contacts/search/`, {
    params: { search: searchInput },
    // headers: { Authorization },
  });
}

async function findByImage(formData) {
  return await http.post(`${BACKEND_URL}/contacts/search/image/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      // Authorization
    },
  });
}

export default {
  findById,
  findByNameOrNationalId,
  findByImage,
};
