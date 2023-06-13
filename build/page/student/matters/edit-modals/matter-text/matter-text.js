import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
const MatterText = ({ question, setQuestion }) => {
    const { setIsVisible } = useModal();
    const [text, setText] = useState(question.title);
    const handleOpenTextEditor = useCallback(() => {
        if (text.length < 1)
            return _jsx(_Fragment, {});
        return _jsx(TextEditor, { value: text, setValue: setText });
    }, [text]);
    const handleEditText = async () => {
        try {
            const { data } = await QuestionServices.updateQuestion({ ...question, title: text });
            setQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => child.id
                    ? {
                        ...child,
                        ...data
                    }
                    : child)
            }));
            setIsVisible(false);
            toast.success("Texto alterado com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ai salvar o texto");
        }
    };
    return (_jsxs("div", { children: [handleOpenTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default MatterText;
//# sourceMappingURL=matter-text.js.map