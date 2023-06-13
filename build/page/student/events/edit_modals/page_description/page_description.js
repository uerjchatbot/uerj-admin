import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { toast } from "react-toastify";
const PageDescription = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState(question.title);
    const renderTextEditor = useCallback(() => {
        if (textTitle.length === 0)
            return _jsx(_Fragment, {});
        return (_jsx(_Fragment, { children: _jsx(TextEditor, { value: textTitle, setValue: setTextTitle }) }));
    }, [textTitle]);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });
            setQuestion((state) => ({ ...state, ...data }));
            setIsVisible(false);
            toast.success("Texto alterado com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ai salvar o texto");
        }
    };
    return (_jsxs(_Fragment, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default PageDescription;
//# sourceMappingURL=page_description.js.map