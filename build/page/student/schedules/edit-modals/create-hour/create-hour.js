import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
const CreateHour = ({ question, setQuestion }) => {
    const { setLoading } = useLoading();
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState("");
    const handleCreateHour = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.create({
                node_chatbot_id: question.chatbot_id,
                question: "",
                title: textTitle,
                response: true
            });
            setQuestion((state) => ({ ...state, childrens: [...state.childrens, data] }));
            toast.success("Horário criado com sucesso!");
            setIsVisible(false);
            setLoading(false);
        }
        catch (error) {
            console.log("error:", error);
            toast.error("Houve um erro ao criar o horário");
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx(TextEditor, { value: textTitle, setValue: setTextTitle }), ";", _jsx(EditTextButton, { event: handleCreateHour })] }));
};
export default CreateHour;
//# sourceMappingURL=create-hour.js.map