import { default as Axios } from "axios";
export const api = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
//# sourceMappingURL=api.js.map