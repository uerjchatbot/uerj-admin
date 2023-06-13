import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
const HomeTitle = ({ question, setQuestion }) => {
    const { setLoading } = useLoading();
    const { setIsVisible } = useModal();
    const [text, setText] = useState(question.title);
    const renderTextEditor = useCallback(() => {
        if (text.length === 0)
            return _jsx(_Fragment, {});
        return _jsx(TextEditor, { value: text, setValue: setText });
    }, [text]);
    const handleEditText = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.updateQuestion({ ...question, title: text });
            setQuestion((state) => ({ ...state, ...data }));
            setIsVisible(false);
            toast.success("Texto alterado com sucesso!");
            setLoading(false);
        }
        catch (error) {
            toast.error("Houve um erro ao salvar o texto");
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default HomeTitle;
//# sourceMappingURL=home-title.js.map