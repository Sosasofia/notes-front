import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: `${token}` }
  };
  const req = await axios.get(`${baseUrl}/notes`, config);
  return req;
};

const create = async (newNote) => {
  const config = {
    headers: { Authorization: `${token}` }
  };
  const response = await axios.post(`${baseUrl}/notes`, newNote, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: `${token}` }
  };

  const response = await axios.delete(`${baseUrl}/notes/${id}`, config);
  return response.data;
};

const update = async (id, updatedNote) => {
  const config = {
    headers: { Authorization: `${token}` }
  };
  const response = await axios.put(`${baseUrl}/notes/${id}`, updatedNote, config);
  return response.data;
};

export default { getAll, create, setToken, remove, update };
