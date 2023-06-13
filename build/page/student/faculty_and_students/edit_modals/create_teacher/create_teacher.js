import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { toast } from "react-toastify";
import * as S from "./styles";
const CreateTeacher = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState("");
    const handleCreateTeacher = async () => {
        try {
            const { data } = await QuestionServices.create({
                node_chatbot_id: question.chatbot_id,
                question: "",
                title: textTitle,
                response: true
            });
            setQuestion((state) => ({ ...state, childrens: [...state.childrens, data] }));
            toast.success("Professor(a) criado(a) com sucesso!");
            setIsVisible(false);
        }
        catch (error) {
            toast.error("Houve um erro ao criar o professor(a), tente novamente mais tarde!");
        }
    };
    return (_jsxs(S.Container, { children: [_jsx(S.SetStudentNameContainer, { children: _jsx(TextEditor, { value: textTitle, setValue: setTextTitle }) }), _jsx(EditTextButton, { event: handleCreateTeacher })] }));
};
export default CreateTeacher;
//# sourceMappingURL=create_teacher.js.map