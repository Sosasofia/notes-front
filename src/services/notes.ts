import axios from "axios";
import { Note } from "../types";
const baseUrl = import.meta.env.VITE_BASE_URL;

let token: string | null = null;

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: `${token}` }
  };
  const req = await axios.get(`${baseUrl}/notes`, config);
  return req;
};

const create = async (newNote: Note) => {
  const config = {
    headers: { Authorization: `${token}` }
  };
  const response = await axios.post(`${baseUrl}/notes`, newNote, config);
  return response.data;
};

const remove = async (id: string) => {
  const config = {
    headers: { Authorization: `${token}` }
  };

  const response = await axios.delete(`${baseUrl}/notes/${id}`, config);
  return response.data;
};

const update = async (id: string, updatedNote: Note) => {
  const config = {
    headers: { Authorization: `${token}` }
  };
  const response = await axios.put(`${baseUrl}/notes/${id}`, updatedNote, config);
  return response.data;
};

export default { getAll, create, setToken, remove, update };
