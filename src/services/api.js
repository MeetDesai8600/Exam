import axios from "axios";

const API_URL = "http://localhost:3000/students";

export default axios.create({
  baseURL: API_URL
});