import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";
const EditProjectQuestion = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textQuestion, setTextQuestion] = useState(question?.question || "");
    const [textTitle, setTextTitle] = useState(question.title || "");
    const renderTextEditor = useCallback(() => {
        if (textQuestion.length === 0)
            return _jsx(_Fragment, {});
        return (_jsxs(_Fragment, { children: [_jsxs(S.QuestionContainer, { children: [_jsx(DotRounded, { children: "3" }), _jsx(TextEditor, { value: textQuestion, setValue: setTextQuestion })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: textTitle, setValue: setTextTitle })] })] }));
    }, [question]);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({
                ...question,
                title: textTitle,
                question: textQuestion
            });
            setQuestion(data);
            setIsVisible(false);
            toast.success("Textos alterados com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ao salvar o texto");
        }
    };
    return (_jsxs(_Fragment, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditProjectQuestion;
//# sourceMappingURL=project.js.map