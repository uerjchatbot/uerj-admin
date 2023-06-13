import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "react-toastify";
import { useModal } from "@/hooks/useModal";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { QuestionServices } from "@/services/question/question.service";
import * as S from "./styles";
const CreateTeacher = ({ question, setData }) => {
    const { setIsVisible } = useModal();
    const [teacher, setTeacher] = useState("Professor(a) ");
    const handleCreateTeacher = async () => {
        try {
            const { data } = await QuestionServices.create({
                node_chatbot_id: question.chatbot_id,
                question: "",
                title: teacher,
                response: true
            });
            setData((state) => ({
                ...state,
                childrens: state.childrens.map((child) => {
                    return child.id === question.id
                        ? { ...child, childrens: [...child.childrens, data] }
                        : child;
                })
            }));
            toast.success("Professor adicionado com sucesso!");
            setIsVisible(false);
        }
        catch (error) {
            console.log("error: ", error);
            toast.error("Erro ao tentar adicionar um professor");
        }
    };
    return (_jsxs(S.Container, { children: [_jsx(S.ClassNameContainer, { children: _jsx(TextEditor, { value: teacher, setValue: setTeacher }) }), _jsx(EditTextButton, { event: handleCreateTeacher })] }));
};
export default CreateTeacher;
//# sourceMappingURL=create_teacher.js.map