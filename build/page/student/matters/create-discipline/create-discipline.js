import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { TextEditor } from "@/components/text-editor";
import { QuestionServices } from "@/services/question/question.service";
const CreateDiscipline = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [text, setText] = useState("");
    const handleCreateDiscipline = async () => {
        try {
            const { data } = await QuestionServices.create({
                node_chatbot_id: question.chatbot_id,
                question: "",
                title: text,
                response: true
            });
            setQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => child.id === question.id
                    ? {
                        ...child,
                        childrens: [...child.childrens, data]
                    }
                    : child)
            }));
            toast.success("Disciplina criada com sucesso!");
            setIsVisible(false);
        }
        catch (error) {
            toast.error("Houve um erro ao criar a disciplina");
        }
    };
    return (_jsxs("div", { children: [_jsx(TextEditor, { value: text, setValue: setText }), _jsx(EditTextButton, { event: handleCreateDiscipline })] }));
};
export default CreateDiscipline;
//# sourceMappingURL=create-discipline.js.map