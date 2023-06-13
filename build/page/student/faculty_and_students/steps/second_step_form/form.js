import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { toast } from "react-toastify";
import { CreateClass } from "../../edit_modals/create_class";
import { EditThirdQuestion } from "../../edit_modals/third_question";
import { EditClass } from "../../edit_modals/third_question/edit_class";
import * as S from "./styles";
const Form = ({ question }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [thirdQuestion, setThirdQuestion] = useState(question.childrens[2]);
    async function getClasses() {
        const { data } = await QuestionServices.getQuestionByNodeId(thirdQuestion.chatbot_id);
        const { data: master } = await QuestionServices.getQuestion(data.childrens[0]);
        const { data: doctor } = await QuestionServices.getQuestion(data.childrens[1]);
        setThirdQuestion({
            ...data,
            childrens: [
                {
                    ...data.childrens[0],
                    childrens: master.childrens
                },
                {
                    ...data.childrens[1],
                    childrens: doctor.childrens
                }
            ]
        });
    }
    const handleOpenEditQuestionModal = () => {
        setTitle(`Editar ${thirdQuestion.question}`);
        setComponent(_jsx(EditThirdQuestion, { question: thirdQuestion, setQuestion: setThirdQuestion }));
        setIsVisible(true);
    };
    const handleOpenEditClassModal = (question) => {
        setTitle(`Editar Turma`);
        setComponent(_jsx(EditClass, { question: question, setQuestion: setThirdQuestion }));
        setIsVisible(true);
    };
    const handleOpenAddClassModal = (question) => {
        setTitle(`Adicionar Turma de ${question.question}`);
        setComponent(_jsx(CreateClass, { question: question, setQuestion: setThirdQuestion }));
        setIsVisible(true);
    };
    const handleDeleteClass = async (question) => {
        try {
            await QuestionServices.deleteQuestion(question);
            setThirdQuestion((state) => ({
                ...state,
                childrens: state.childrens.map((child) => {
                    return { ...child, childrens: child.childrens.filter((c) => c.id !== question.id) };
                })
            }));
            toast.success("Turma deletada com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ao deletar a turma, tente novamente!");
        }
    };
    const renderClassList = useCallback(() => {
        return (_jsx("div", { children: thirdQuestion?.childrens?.map((node, index) => (_jsxs("div", { children: [_jsxs(S.ClassHeaderContainer, { children: [_jsx("p", { children: `${index + 1}- ${node.question}` }), _jsxs("button", { onClick: () => handleOpenAddClassModal(node), children: ["Adicionar turma ", _jsx(IoIosPeople, {})] })] }), node?.childrens?.map((child, childIndex) => {
                        return (_jsx(S.ClassDataContainer, { children: _jsxs(S.ClassDataHeaderContainer, { children: [_jsxs(S.Card, { children: [_jsxs("strong", { children: [childIndex + 1, ". "] }), _jsx("span", { dangerouslySetInnerHTML: { __html: child.title } })] }), _jsxs("div", { children: [_jsx("button", { children: _jsx(FiEdit, { onClick: () => {
                                                        handleOpenEditClassModal(child);
                                                    } }) }), _jsx("button", { children: _jsx(BsTrash, { onClick: () => handleDeleteClass(child) }) })] })] }) }, child?.id));
                    })] }, node?.id))) }));
    }, [thirdQuestion?.childrens]);
    useEffect(() => {
        if (thirdQuestion.id)
            getClasses();
    }, [thirdQuestion.id]);
    return (_jsx(S.ContainerCards, { children: _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "3" }), _jsx(S.QuestionTitle, { dangerouslySetInnerHTML: { __html: thirdQuestion.question } })] }), _jsxs(S.DescriptionContainer, { children: [_jsx(S.Title, { dangerouslySetInnerHTML: { __html: thirdQuestion.title } }), _jsx(S.EditButtonContainer, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsx(S.ClassContainer, { children: renderClassList() })] }) }));
};
export default Form;
//# sourceMappingURL=form.js.map