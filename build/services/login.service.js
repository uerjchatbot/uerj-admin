import { api } from "./api";
export const LoginService = {
    async login(formData) {
        const response = await api.post("/sessions", formData);
        return response;
    },
    logout() { }
};
//# sourceMappingURL=login.service.js.map