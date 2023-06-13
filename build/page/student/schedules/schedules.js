import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { CreateHourModal } from "./edit-modals/create-hour";
import { EditHourModal } from "./edit-modals/edit-hour";
import { EditHomeTitle } from "./edit-modals/home-title";
import * as S from "./styles";
const Schedules = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [homeData, setHomeData] = useState({});
    const handleNavigateBack = () => navigate(STUDENT_PATH());
    const handleOpenAddHourModal = () => {
        setTitle("Adicionar horário");
        setComponent(_jsx(CreateHourModal, { question: homeData, setQuestion: setHomeData }));
        setIsVisible(true);
    };
    const handleOpenEditTitleModal = () => {
        setTitle("Editar Horários");
        setComponent(_jsx(EditHomeTitle, { question: homeData, setQuestion: setHomeData }));
        setIsVisible(true);
    };
    const handleOpenEditHourModal = (question) => {
        setTitle("Editar Horário");
        setComponent(_jsx(EditHourModal, { question: question, setQuestion: setHomeData }));
        setIsVisible(true);
    };
    const handleDeleteHour = async (question) => {
        try {
            setLoading(true);
            await QuestionServices.deleteQuestion(question);
            setHomeData((state) => ({
                ...state,
                childrens: state.childrens.filter((child) => child.id !== question.id)
            }));
            toast.success("Horário excluido com sucesso!");
            setLoading(false);
        }
        catch (error) {
            toast.error("Houve um erro ao deletar o horário");
        }
    };
    const gethomeData = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setHomeData(data);
            setLoading(false);
        }
        catch (error) {
            toast.error("Houve um erro ao pegar os dados dos horários");
            setLoading(false);
        }
    };
    const renderHoursList = useCallback(() => {
        return (_jsx("div", { children: homeData?.childrens?.map((child, index) => {
                return (_jsx(S.ClassDataContainer, { children: _jsxs(S.ClassDataHeaderContainer, { children: [_jsxs(S.Title, { children: [_jsxs("strong", { children: [index + 1, "."] }), _jsx("div", { dangerouslySetInnerHTML: { __html: child.title } })] }), _jsxs(S.ButtonGroup, { children: [_jsx("button", { children: _jsx(FiEdit, { onClick: () => {
                                                handleOpenEditHourModal(child);
                                            } }) }), _jsx("button", { children: _jsx(BsTrash, { onClick: () => handleDeleteHour(child) }) })] })] }) }, child.id));
            }) }));
    }, [homeData.childrens]);
    useEffect(() => {
        gethomeData();
    }, [state]);
    return (_jsx(S.Container, { children: _jsxs(S.ContainerCards, { children: [_jsx(S.ButtonContainer, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) }), _jsxs(S.ContentCard, { children: [_jsx(S.ContentCardHeader, { children: _jsx("span", { dangerouslySetInnerHTML: { __html: homeData?.title } }) }), _jsxs(S.EditButtonContainer, { children: [_jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditTitleModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }), _jsx(S.AddSchedulesButton, { type: "button", children: _jsxs("span", { onClick: handleOpenAddHourModal, children: ["Adicionar hor\u00E1rio ", _jsx(IoIosPeople, { size: 16 })] }) })] }), _jsx(S.ClassContainer, { children: renderHoursList() })] })] }) }));
};
export default Schedules;
//# sourceMappingURL=schedules.js.map