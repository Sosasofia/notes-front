import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
import { Credentials } from "@/types";

const login = async (credentials: Credentials) => {
  const res = await axios.post(`${baseUrl}/login`, credentials);
  return res;
};

export default { login };
