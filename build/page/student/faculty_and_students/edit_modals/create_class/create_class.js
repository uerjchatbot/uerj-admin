import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { TextEditor } from "@/components/text-editor";
import { QuestionServices } from "@/services/question/question.service";
import { toast } from "react-toastify";
import * as S from "./styles";
const CreateClass = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState("");
    const updateData = async () => {
        try {
            const { data } = await QuestionServices.create({
                node_chatbot_id: question.chatbot_id,
                question: "",
                title: textTitle,
                response: true
            });
            setQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => {
                    return child.id === question.id
                        ? { ...child, childrens: [...child.childrens, data] }
                        : child;
                })
            }));
            toast.success("Turma criada com sucesso!");
            setIsVisible(false);
        }
        catch (error) {
            toast.error("Houve um erro ao criar a turma, tente novamente mais tarde!");
        }
    };
    return (_jsxs(S.Container, { children: [_jsx(TextEditor, { value: textTitle, setValue: setTextTitle }), _jsx(S.Button, { onClick: updateData, children: "Salvar" })] }));
};
export default CreateClass;
//# sourceMappingURL=create_class.js.map