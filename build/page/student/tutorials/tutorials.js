import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import * as S from "./styles";
const Tutorials = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { setLoading } = useLoading();
    const [selectedStage, setSelectedStage] = useState(1);
    const [tutorialsData, setTutorialsData] = useState({});
    const handleNavigateBack = () => navigate(STUDENT_PATH());
    const handleSelectStage = (stageNumber) => setSelectedStage(stageNumber);
    const getSchedulesData = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setTutorialsData(data);
            setLoading(false);
        }
        catch (error) {
            toast.error("Houve um erro ao pegar os dados dos horários");
            setLoading(false);
        }
    };
    useEffect(() => {
        getSchedulesData();
    }, [state]);
    return (_jsxs(S.Container, { children: [_jsxs(S.HeaderContainer, { children: [_jsxs("div", { className: "switch-step-container", children: [_jsx(S.SwitchStageButton, { isSelected: selectedStage === 1, onClick: () => handleSelectStage(1), children: "Etapa 1" }), _jsx(S.SwitchStageButton, { isSelected: selectedStage === 2, onClick: () => handleSelectStage(2), children: "Etapa 2" })] }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) })] }), tutorialsData.childrens && selectedStage === 1 && (_jsx(FirstStepForm, { question: tutorialsData, setQuestion: setTutorialsData })), tutorialsData.childrens && selectedStage === 2 && (_jsx(SecondStepForm, { question: tutorialsData, setQuestion: setTutorialsData }))] }));
};
export default Tutorials;
//# sourceMappingURL=tutorials.js.map