import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { Container } from "./styles";
const EditQuestion = ({ question, setQuestion }) => {
    const { setLoading } = useLoading();
    const [text, setText] = useState(question.title);
    const { setIsVisible } = useModal();
    const renderTextEditor = useCallback(() => {
        if (!text)
            return _jsx(_Fragment, {});
        return (_jsx(_Fragment, { children: _jsx(TextEditor, { value: text, setValue: setText }) }));
    }, [text]);
    const handleEditDates = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.updateQuestion({ ...question, title: text });
            setQuestion((state) => ({ ...state, ...data }));
            setIsVisible(false);
            toast.success("Tutorial atualizado com sucesso");
            setLoading(false);
        }
        catch (error) {
            toast.error("Houve um erro ao atualizar o tutorial");
            setLoading(false);
        }
    };
    return (_jsxs(Container, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditDates })] }));
};
export default EditQuestion;
//# sourceMappingURL=edit-question.js.map