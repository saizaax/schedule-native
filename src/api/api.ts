import axios from "axios"
import { API_URL } from "../config/config"

export const API = axios.create({
  baseURL: API_URL
})