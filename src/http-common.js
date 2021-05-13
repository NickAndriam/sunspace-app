import axios from "axios";

export const API_URL = "http://localhost:5000"
export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
});
