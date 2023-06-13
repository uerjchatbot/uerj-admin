import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { FaUserAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CreateTeacher } from "../../edit_modals/create_teacher";
import { EditFourthQuestion } from "../../edit_modals/fourth_question";
import { EditTeachers } from "../../edit_modals/fourth_question/edit_teachers";
import * as S from "./styles";
const Form = ({ question }) => {
    const { setIsVisible, setTitle, setComponent } = useModal();
    const [fourthQuestion, setFourthQuestion] = useState(question.childrens[3]);
    const getTeachersData = async () => {
        try {
            const { data } = await QuestionServices.getQuestionByNodeId(fourthQuestion.chatbot_id);
            setFourthQuestion(data);
        }
        catch (error) {
            toast.error("Houve um erro ao pegar as informações dos professores");
        }
    };
    const handleOpenEditQuestionModal = () => {
        setTitle(`Editar ${fourthQuestion.question}`);
        setComponent(_jsx(EditFourthQuestion, { setQuestion: setFourthQuestion, question: fourthQuestion }));
        setIsVisible(true);
    };
    const handleOpenEditTeachersModal = (question) => {
        setTitle(`Editar Professor(a)`);
        setComponent(_jsx(EditTeachers, { question: question, setQuestion: setFourthQuestion }));
        setIsVisible(true);
    };
    const handleOpenAddTeacherModal = () => {
        setTitle(`Adicionar Professor(a)`);
        setComponent(_jsx(CreateTeacher, { question: fourthQuestion, setQuestion: setFourthQuestion }));
        setIsVisible(true);
    };
    const handleDeleteClass = async (question) => {
        try {
            await QuestionServices.deleteQuestion(question);
            setFourthQuestion((state) => ({
                ...state,
                childrens: state.childrens.filter((child) => child.id !== question.id)
            }));
            toast.success("Professo(a) deletado(a) com sucesso!");
        }
        catch (error) {
            toast.error("Houve um erro ao deletar o(a) professor(a), tente novamente!");
        }
    };
    useEffect(() => {
        getTeachersData();
    }, []);
    return (_jsx(S.ContainerCards, { children: _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "4" }), _jsx("span", { children: fourthQuestion?.question })] }), _jsxs(S.DescriptionContainer, { children: [_jsx("div", { dangerouslySetInnerHTML: { __html: fourthQuestion?.title } }), _jsxs(S.ContainerButton, { children: [_jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }), _jsx(S.AddTeacherButton, { type: "button", children: _jsxs("span", { onClick: () => handleOpenAddTeacherModal(), children: ["Adicionar professor(a) ", _jsx(FaUserAlt, { size: 16 })] }) })] })] }), fourthQuestion.childrens?.map((child, index) => (_jsx(S.ClassDataContainer, { children: _jsxs(S.ClassDataHeaderContainer, { children: [_jsxs(S.Card, { children: [_jsxs("strong", { children: [index + 1, ". "] }), _jsx("span", { dangerouslySetInnerHTML: { __html: child.title } })] }), _jsxs("div", { children: [_jsx("button", { children: _jsx(FiEdit, { onClick: () => handleOpenEditTeachersModal(child) }) }), _jsx("button", { children: _jsx(BsTrash, { onClick: () => handleDeleteClass(child) }) })] })] }) }, child.id)))] }) }));
};
export default Form;
//# sourceMappingURL=form.js.map