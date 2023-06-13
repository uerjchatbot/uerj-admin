import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
const EditTitle = ({ question, setData }) => {
    const { setIsVisible } = useModal();
    const [text, setText] = useState("");
    const renderTextEditor = useCallback(() => {
        if (text.length === 0)
            return _jsx(_Fragment, {});
        return _jsx(TextEditor, { value: text, setValue: setText });
    }, [text]);
    const handleEditText = async () => {
        try {
            const response = await QuestionServices.updateQuestion({ ...question, title: text });
            setData((oldValue) => {
                return { ...oldValue, ...response.data };
            });
            setIsVisible(false);
            toast.success("Texto alterado com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ao salvar o texto");
        }
    };
    useEffect(() => {
        if (question.title && question.title?.length > 0) {
            setText(question.title);
        }
    }, [question.title]);
    return (_jsxs("div", { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditTitle;
//# sourceMappingURL=edit-title.js.map