"use client";
import http from "./httpService";
import auth from "./authService";
import { BACKEND_URL } from "../constants/config";

const Authorization = `Bearer ${auth.getToken()}`;

async function createContact(data) {
  return await http.post(`${BACKEND_URL}/contacts/`, data, {
    headers: { Authorization },
  });
}

async function modifyContact(id, data) {
  return await http.put(`${BACKEND_URL}/contacts/${id}/`, data, {
    headers: { Authorization },
  });
}

async function getContact(id) {
  return await http.get(`${BACKEND_URL}/contacts/${id}`, {
    headers: { Authorization },
  });
}

async function getContactList() {
  return await http.get(`${BACKEND_URL}/contacts/`, {
    headers: { Authorization },
  });
}

async function getContactStatusHistory(id) {
  return await http.get(`${BACKEND_URL}/contacts/${id}/history`, {
    headers: { Authorization },
  });
  
}

export default {
  createContact,
  getContactList,
  modifyContact,
  getContact,
  getContactStatusHistory,
};
