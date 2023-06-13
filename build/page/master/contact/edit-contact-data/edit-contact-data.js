import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../styles";
import { Container, QuestionContainer } from "./styles";
const EditFirstQuestion = ({ question, setQuestion }) => {
    const [text, setText] = useState(question.question);
    const [textInfo, setTextInfo] = useState(question.title);
    const { setIsVisible } = useModal();
    const renderTextEditor = useCallback(() => {
        if (text.length === 0)
            return _jsx(_Fragment, {});
        return (_jsxs(_Fragment, { children: [_jsxs(QuestionContainer, { children: [_jsx(DotRounded, { children: "1" }), _jsx(TextEditor, { value: text, setValue: setText })] }), _jsx(TextEditor, { value: textInfo, setValue: setTextInfo })] }));
    }, [text]);
    const handleUpdate = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({
                ...question,
                title: textInfo,
                question: text
            });
            setQuestion(data);
            setIsVisible(false);
            toast.success("Título e datas alteradas com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ai salvar o texto");
        }
    };
    return (_jsxs(Container, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleUpdate })] }));
};
export default EditFirstQuestion;
//# sourceMappingURL=edit-contact-data.js.map