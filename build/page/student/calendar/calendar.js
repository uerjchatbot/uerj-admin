import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { EditCalendarTitle } from "./edit-calendar-title";
import { Container, ContainerButton, ContainerCards, ContentCard, ContentCardHeader, DescriptionContainer, DotRounded, QuestionTitle, Title } from "./styles";
import { QuestionServices } from "@/services/question/question.service";
import { EditFirstQuestion } from "./questions/edit-first-question";
import { EditFourthQuestion } from "./questions/edit-fourth-question";
import { EditSecondQuestion } from "./questions/edit-second-question";
import { EditThirdQuestion } from "./questions/edit-third-question";
const Calendar = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { state } = useLocation();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [titleData, setTitleData] = useState({});
    const [firstQuestionData, setFirstQuestionData] = useState({});
    const [secondQuestionData, setSecondQuestionData] = useState({});
    const [thirdQuestionData, setThirdQuestionData] = useState({});
    const [fourthQuestionData, setFourthQuestionData] = useState({});
    const handleNavigateBack = () => navigate(STUDENT_PATH());
    //? Get data from routes
    const getChildrensData = useCallback(async () => {
        setLoading(true);
        if (titleData.childrens) {
            try {
                titleData.childrens.forEach(async (children, index) => {
                    setLoading(true);
                    const { data } = await QuestionServices.getQuestion(children);
                    switch (index) {
                        case 0:
                            setFirstQuestionData(data);
                            break;
                        case 1:
                            setSecondQuestionData(data);
                            break;
                        case 2:
                            setThirdQuestionData(data);
                            break;
                        case 3:
                            setFourthQuestionData(data);
                            break;
                    }
                });
            }
            catch (error) {
                setLoading(false);
            }
        }
        setLoading(false);
    }, [titleData]);
    const getTitleData = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setTitleData(data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Houve um erro ao pegar as informações do título");
        }
    }, []);
    //? Edit Text's modals
    const handleOpenEditTitleModal = () => {
        setTitle(`Editar ${titleData.question}`);
        setComponent(_jsx(EditCalendarTitle, { question: titleData, setData: setTitleData }));
        setIsVisible(true);
    };
    const handleOpenEditFirstQuestionModal = () => {
        setTitle(`Editar ${firstQuestionData.question}`);
        setComponent(_jsx(EditFirstQuestion, { question: firstQuestionData, setQuestion: setFirstQuestionData }));
        setIsVisible(true);
    };
    const handleOpenEditSecondQuestionModal = () => {
        setTitle(`Editar ${secondQuestionData.question}`);
        setComponent(_jsx(EditSecondQuestion, { question: secondQuestionData, setQuestion: setSecondQuestionData }));
        setIsVisible(true);
    };
    const handleOpenEditThirdQuestionModal = () => {
        setTitle(`Editar ${secondQuestionData.question}`);
        setComponent(_jsx(EditThirdQuestion, { question: thirdQuestionData, setQuestion: setThirdQuestionData }));
        setIsVisible(true);
    };
    const handleOpenEditFourthQuestionModal = () => {
        setTitle(`Editar ${fourthQuestionData.question}`);
        setComponent(_jsx(EditFourthQuestion, { question: fourthQuestionData, setQuestion: setFourthQuestionData }));
        setIsVisible(true);
    };
    //? Render components functions
    const renderFirstQuestion = useCallback(() => {
        if (!firstQuestionData.question || !firstQuestionData.title)
            return _jsx(_Fragment, {});
        return (_jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "1" }), _jsx(QuestionTitle, { children: firstQuestionData.question })] }), _jsx(Title, { dangerouslySetInnerHTML: { __html: firstQuestionData.title } }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditFirstQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }));
    }, [firstQuestionData]);
    const renderSecondQuestion = useCallback(() => {
        if (!secondQuestionData.question || !secondQuestionData.title)
            return _jsx(_Fragment, {});
        return (_jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "2" }), _jsx(QuestionTitle, { children: secondQuestionData.question })] }), _jsx(Title, { dangerouslySetInnerHTML: { __html: secondQuestionData.title } }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditSecondQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }));
    }, [secondQuestionData]);
    const renderThirdQuestion = useCallback(() => {
        if (!thirdQuestionData.question || !thirdQuestionData.title)
            return _jsx(_Fragment, {});
        return (_jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "3" }), _jsx(QuestionTitle, { children: thirdQuestionData.question })] }), _jsx(Title, { dangerouslySetInnerHTML: { __html: thirdQuestionData.title } }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditThirdQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }));
    }, [thirdQuestionData]);
    const renderFourthQuestion = useCallback(() => {
        if (!fourthQuestionData.question || !fourthQuestionData.title)
            return _jsx(_Fragment, {});
        return (_jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "4" }), _jsx(QuestionTitle, { children: fourthQuestionData.question })] }), _jsx(Title, { dangerouslySetInnerHTML: { __html: fourthQuestionData.title } }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditFourthQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }));
    }, [fourthQuestionData]);
    useEffect(() => {
        getTitleData();
    }, []);
    useEffect(() => {
        getChildrensData();
    }, [getChildrensData]);
    return (_jsxs(Container, { children: [_jsx(ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) }), _jsxs(_Fragment, { children: [_jsxs(DescriptionContainer, { children: [titleData?.title && (_jsx(Title, { dangerouslySetInnerHTML: {
                                    __html: titleData.title
                                } })), _jsx("div", { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditTitleModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(ContainerCards, { children: [renderFirstQuestion(), renderSecondQuestion(), renderThirdQuestion(), renderFourthQuestion()] })] })] }));
};
export default Calendar;
//# sourceMappingURL=calendar.js.map