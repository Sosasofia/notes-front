import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const login = async (credentials) => {
  const res = await axios.post(`${baseUrl}/login`, credentials);
  return res;
};

export default { login };
