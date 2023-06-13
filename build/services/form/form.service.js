import { api } from "../api";
export const FormService = {
    create({ title, token, questionId }) {
        return api.post(`/forms/${questionId}`, { title, token });
    },
    createQuestion(data) {
        return api.post(`/forms/create-questions`, data);
    },
    list(questionId) {
        return api.get(`/forms/${questionId}`);
    }
};
//# sourceMappingURL=form.service.js.map