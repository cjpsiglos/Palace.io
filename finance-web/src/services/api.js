import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const registerUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, { email, password });
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        return null;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
};
