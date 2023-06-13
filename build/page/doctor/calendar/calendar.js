import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { DOCTOR_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { EditCalendarLink } from "./edit-calendar-link";
import { Container, ContainerButton, DescriptionContainer, Title } from "./styles";
const Calendar = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { state } = useLocation();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [calendarData, setCalendarData] = useState({});
    const handleNavigateBack = () => navigate(DOCTOR_PATH());
    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setCalendarData(data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Houve um erro ao pegar as informações do título");
        }
    }, []);
    const handleOpenEditTitleModal = (question) => {
        setTitle(`Editar Link do calendário`);
        setComponent(_jsx(EditCalendarLink, { question: calendarData, setQuestion: setCalendarData }));
        setIsVisible(true);
    };
    useEffect(() => {
        getData();
    }, []);
    return (_jsxs(Container, { children: [_jsx(ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) }), _jsx(_Fragment, { children: _jsxs(DescriptionContainer, { children: [_jsx(Title, { dangerouslySetInnerHTML: { __html: calendarData.title } }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: () => handleOpenEditTitleModal(calendarData), children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }) })] }));
};
export default Calendar;
//# sourceMappingURL=calendar.js.map