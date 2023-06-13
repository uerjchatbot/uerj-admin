import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";
const EditQuestionItem = ({ index, question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState(question.title);
    const [textQuestion, setTextQuestion] = useState(question.question);
    const renderTextEditor = useCallback(() => {
        return (_jsxs(_Fragment, { children: [_jsxs(S.QuestionContainer, { children: [_jsx(DotRounded, { children: index + 1 }), _jsx(TextEditor, { value: textQuestion, setValue: setTextQuestion })] }), _jsx(TextEditor, { value: textTitle, setValue: setTextTitle })] }));
    }, [textTitle, textQuestion]);
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
            console.log("error:", error);
            toast.error("Houve um erro ao salvar o texto");
        }
    };
    return (_jsxs(_Fragment, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditQuestionItem;
//# sourceMappingURL=question_item.js.map