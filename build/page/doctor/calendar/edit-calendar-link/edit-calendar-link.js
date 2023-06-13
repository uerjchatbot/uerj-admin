import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
const EditCalendarLink = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [text, setText] = useState(question.title);
    const renderTextEditor = useCallback(() => {
        if (text.length === 0)
            return _jsx(_Fragment, {});
        return _jsx(TextEditor, { value: text, setValue: setText });
    }, [text]);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({ ...question, title: text });
            setQuestion(data);
            setIsVisible(false);
            toast.success("Link alterado com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ai salvar o texto");
        }
    };
    return (_jsxs("div", { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditCalendarLink;
//# sourceMappingURL=edit-calendar-link.js.map