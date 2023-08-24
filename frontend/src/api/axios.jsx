import axios from "axios";
import { API_URL } from "../config";

const clientAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default clientAxios;
