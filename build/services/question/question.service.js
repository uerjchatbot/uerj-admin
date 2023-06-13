import { api } from "../api";
export const QuestionServices = {
    create(question) {
        return api.post(`/questions`, question);
    },
    getQuestionByNodeId(nodeId) {
        return api.get(`/questions/${nodeId}`);
    },
    getQuestion(question) {
        return api.get(`/questions/${question.chatbot_id}`);
    },
    updateQuestion(question) {
        return api.patch(`/questions/${question.id}`, {
            title: question.title,
            question: question.question
        });
    },
    deleteQuestion(question) {
        return api.delete(`/questions/${question.id}`);
    }
};
//# sourceMappingURL=question.service.js.map