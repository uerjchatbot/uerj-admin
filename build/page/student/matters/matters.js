import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { CreateDisciplineModal } from "./create-discipline";
import { HomeTitle } from "./edit-modals/home-title";
import { EditMatterText } from "./edit-modals/matter-text";
import * as S from "./styles";
const Matters = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [homeData, setHomeData] = useState({});
    const getMattersData = useCallback(async () => {
        const { data } = await QuestionServices.getQuestion(state);
        const { data: master } = await QuestionServices.getQuestion(data.childrens[0]);
        const { data: doctor } = await QuestionServices.getQuestion(data.childrens[1]);
        setHomeData({ ...data, childrens: [master, doctor] });
    }, [state, setHomeData]);
    const handleNavigateBack = () => navigate(STUDENT_PATH());
    const handleOpenEditHomeTitle = () => {
        setTitle("Editar Disciplinas");
        setComponent(_jsx(HomeTitle, { question: homeData, setQuestion: setHomeData }));
        setIsVisible(true);
    };
    const handleOpenAddDisciplineModal = (question) => {
        setTitle(`Criar disciplina de ${question.question}`);
        setComponent(_jsx(CreateDisciplineModal, { question: question, setQuestion: setHomeData }));
        setIsVisible(true);
    };
    const handleEditMatterText = (question) => {
        setTitle(`Editar texto das turmas de ${question.question}`);
        setComponent(_jsx(EditMatterText, { question: question, setQuestion: setHomeData }));
        setIsVisible(true);
    };
    const handleDeleteDiscipline = async (question) => {
        try {
            await QuestionServices.deleteQuestion(question);
            setHomeData((state) => ({
                ...state,
                childrens: state.childrens.map((child) => ({
                    ...child,
                    childrens: child.childrens.filter((c) => c.id !== question.id)
                }))
            }));
            toast.success("Disciplina excluida com sucesso");
        }
        catch (error) {
            toast.error("Houve um erro ao deletar a disciplina");
        }
    };
    useEffect(() => {
        getMattersData();
    }, [getMattersData]);
    return (_jsxs(S.Container, { children: [_jsxs(S.Header, { children: [_jsx(S.ButtonContainer, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) }), _jsxs(S.TitleContainer, { children: [_jsx(S.Title, { dangerouslySetInnerHTML: { __html: homeData.title } }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditHomeTitle, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] })] }), homeData?.childrens?.map((child, index) => {
                return (_jsxs(S.Content, { children: [_jsxs(S.ContentHeader, { children: [_jsx(S.DotRounded, { children: index + 1 }), _jsx("span", { children: child.question })] }), _jsxs(S.ContentBody, { children: [_jsx(S.Title, { dangerouslySetInnerHTML: { __html: child.title } }), _jsxs(S.MatterHeaderContainer, { children: [_jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleEditMatterText(child), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }), _jsx(S.AddMatter, { type: "button", children: _jsxs("span", { onClick: () => handleOpenAddDisciplineModal(child), children: ["Adicionar disciplina ", _jsx(AiOutlinePlus, { size: 16 })] }) })] }), _jsx(S.MattersList, { children: child?.childrens?.map((c, cindex) => (_jsxs("li", { children: [_jsxs("div", { children: [_jsxs("strong", { children: [cindex + 1, " - "] }), _jsx(S.Title, { children: c.title })] }), _jsx("button", { children: _jsx(BsTrash, { onClick: () => handleDeleteDiscipline(c) }) })] }, c.id))) })] })] }, child.id));
            })] }));
};
export default Matters;
//# sourceMappingURL=matters.js.map