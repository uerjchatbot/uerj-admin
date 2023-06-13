import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useModal } from "@/hooks/useModal";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { QuestionServices } from "@/services/question/question.service";
import * as S from "./styles";
const EditClass = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState(question.title);
    const renderAddStudent = useCallback(() => {
        if (textTitle === "")
            return;
        return _jsx(TextEditor, { value: textTitle, setValue: setTextTitle });
    }, [textTitle]);
    const updateData = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });
            setQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => {
                    return {
                        ...child,
                        childrens: child.childrens.map((c) => (c.id === question.id ? data : c))
                    };
                })
            }));
            toast.success("Turma alterada com sucesso!");
            setIsVisible(false);
        }
        catch (error) {
            toast.error("Houve um erro ao atualizar os dados, tente novamente mais tarde!");
        }
    };
    return (_jsxs(S.Container, { children: [_jsx(S.ClassNameContainer, {}), renderAddStudent(), _jsx(EditTextButton, { event: updateData })] }));
};
export default EditClass;
//# sourceMappingURL=edit_class.js.map