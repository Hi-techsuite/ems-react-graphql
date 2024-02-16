import axios from "axios";

export const baseURL = "http://localhost:4444";
export const server = axios.create({
  baseURL,
});
