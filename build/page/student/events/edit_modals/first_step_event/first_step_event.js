import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
const EditFirstStepEvent = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState(question.title);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });
            setQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => (child.id === question.id ? data : child))
            }));
            setIsVisible(false);
            toast.success("Textos alterados com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ao salvar o texto");
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(TextEditor, { value: textTitle, setValue: setTextTitle }), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditFirstStepEvent;
//# sourceMappingURL=first_step_event.js.map