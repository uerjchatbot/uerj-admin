import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";
const EditRegistrationQuestion = ({ registration, setRegistration }) => {
    const { setIsVisible } = useModal();
    const [question, setQuestion] = useState(registration?.question);
    const [title, setTitle] = useState(registration?.title);
    const renderTextEditor = useCallback(() => {
        if (question.length === 0)
            return _jsx(_Fragment, {});
        return (_jsxs(_Fragment, { children: [_jsxs(S.QuestionContainer, { children: [_jsx(DotRounded, { children: "4" }), _jsx(TextEditor, { value: question, setValue: setQuestion })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: title, setValue: setTitle })] })] }));
    }, [question]);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({
                ...registration,
                title,
                question
            });
            setRegistration(data);
            setIsVisible(false);
            toast.success("Textos alterados com sucesso!");
        }
        catch (error) {
            console.log("error:", error);
            toast.error("Houve um erro ao salvar o texto");
        }
    };
    return (_jsxs(_Fragment, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditRegistrationQuestion;
//# sourceMappingURL=registration.js.map