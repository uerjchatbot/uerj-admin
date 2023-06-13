import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";
import { Container, QuestionContainer } from "./style";
const EditFourthQuestion = ({ question, setQuestion }) => {
    const [textQuestion, setTextQuestion] = useState(question.question);
    const [textTitle, setTextTitle] = useState(question.title);
    const { setIsVisible } = useModal();
    const renderTextEditor = useCallback(() => {
        if (question.title.length === 0)
            return _jsx(_Fragment, {});
        return (_jsxs(_Fragment, { children: [_jsxs(QuestionContainer, { children: [_jsx(DotRounded, { children: "4" }), _jsx(TextEditor, { value: textQuestion, setValue: setTextQuestion })] }), _jsx(TextEditor, { value: textTitle, setValue: setTextTitle })] }));
    }, [question.title]);
    const handleEditDates = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({
                ...question,
                title: textTitle,
                question: textQuestion
            });
            setQuestion(data);
            setIsVisible(false);
            toast.success("Título e datas alteradas com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ai salvar o texto");
        }
    };
    return (_jsxs(Container, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditDates })] }));
};
export default EditFourthQuestion;
//# sourceMappingURL=edit-fourth-question.js.map