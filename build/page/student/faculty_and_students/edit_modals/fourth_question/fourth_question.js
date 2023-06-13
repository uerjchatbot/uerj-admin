import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";
import * as S from "./styles";
const EditThirdQuestion = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textQuestion, setTextQuestion] = useState(question.question);
    const [textTitle, setTextTitle] = useState(question.title);
    const renderTextEditor = useCallback(() => {
        if (textTitle.length === 0)
            return _jsx(_Fragment, {});
        return (_jsxs(_Fragment, { children: [_jsxs(S.QuestionContainer, { children: [_jsx(DotRounded, { children: "4" }), _jsx(S.Input, { defaultValue: textQuestion, onChange: (e) => setTextQuestion(e.target.value) })] }), _jsx(TextEditor, { value: textTitle, setValue: setTextTitle })] }));
    }, [textTitle, textQuestion]);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({
                ...question,
                title: textTitle,
                question: textQuestion
            });
            setQuestion({ ...question, ...data });
            setIsVisible(false);
        }
        catch (error) {
            toast.error("Houve um erro ao editar os textos, tente novamente mais tarde");
        }
    };
    return (_jsxs("div", { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditThirdQuestion;
//# sourceMappingURL=fourth_question.js.map