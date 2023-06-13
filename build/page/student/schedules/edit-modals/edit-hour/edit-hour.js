import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
const EditHour = ({ question, setQuestion }) => {
    const { setLoading } = useLoading();
    const { setIsVisible } = useModal();
    const [textTitle, setTextTitle] = useState(question.title);
    const handleUpdateHour = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });
            setQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => (child.id === question.id ? data : child))
            }));
            toast.success("Horário atualizado com sucesso!");
            setIsVisible(false);
            setLoading(false);
        }
        catch (error) {
            console.log("error:", error);
            toast.error("Houve um erro ao atualizar o horário");
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx(TextEditor, { value: textTitle, setValue: setTextTitle }), ";", _jsx(EditTextButton, { event: handleUpdateHour })] }));
};
export default EditHour;
//# sourceMappingURL=edit-hour.js.map