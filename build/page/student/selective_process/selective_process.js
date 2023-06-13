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
import { ThirdStepForm } from "./steps/second_step_form copy";
import * as S from "./styles";
const SelectiveProcess = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { setLoading } = useLoading();
    const [selectedStage, setSelectedStage] = useState(1);
    const [selectiveProcessData, setSelectiveProcesssData] = useState({});
    const handleNavigateBack = () => navigate(STUDENT_PATH());
    const handleSelectStage = (stageNumber) => setSelectedStage(stageNumber);
    const getSelectiveProcessData = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setSelectiveProcesssData(data);
            setLoading(false);
        }
        catch (error) {
            console.log("error:", error);
            toast.error("Houve um erro ao pegar as informações da página");
            setLoading(false);
        }
    };
    useEffect(() => {
        getSelectiveProcessData();
    }, [state]);
    return (_jsxs(S.Container, { children: [_jsxs(S.HeaderContainer, { children: [_jsxs("div", { className: "switch-step-container", children: [_jsx(S.SwitchStageButton, { isSelected: selectedStage === 1, onClick: () => handleSelectStage(1), children: "Etapa 1" }), _jsx(S.SwitchStageButton, { isSelected: selectedStage === 2, onClick: () => handleSelectStage(2), children: "Etapa 2" }), _jsx(S.SwitchStageButton, { isSelected: selectedStage === 3, onClick: () => handleSelectStage(3), children: "Etapa 2" })] }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) })] }), selectiveProcessData.childrens && selectedStage === 1 && (_jsx(FirstStepForm, { question: selectiveProcessData, setQuestion: setSelectiveProcesssData })), selectiveProcessData.childrens && selectedStage === 2 && (_jsx(SecondStepForm, { question: selectiveProcessData })), selectiveProcessData.childrens && selectedStage === 3 && (_jsx(ThirdStepForm, { question: selectiveProcessData }))] }));
};
export default SelectiveProcess;
//# sourceMappingURL=selective_process.js.map