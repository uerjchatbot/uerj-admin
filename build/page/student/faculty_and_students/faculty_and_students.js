import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/button";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ThirdStepForm } from "./steps/third_step_form";
import * as S from "./styles";
const FacultAndStudents = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { state } = useLocation();
    const [selectedStage, setSelectedStage] = useState(1);
    const [homeData, setHomeData] = useState({});
    const handleNavigateBack = () => navigate(STUDENT_PATH());
    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setHomeData(data);
            setLoading(false);
        }
        catch (error) {
            console.log("error:", error);
            toast.error("Houve um erro ao pegar as informações.");
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const handleSelectStage = (stageNumber) => setSelectedStage(stageNumber);
    return (_jsxs(S.Container, { children: [_jsxs(S.HeaderContainer, { children: [_jsxs("div", { children: [_jsx(S.SwitchStageButton, { isSelected: selectedStage === 1, onClick: () => handleSelectStage(1), children: "Etapa 1" }), _jsx(S.SwitchStageButton, { isSelected: selectedStage === 2, onClick: () => handleSelectStage(2), children: "Etapa 2" }), _jsx(S.SwitchStageButton, { isSelected: selectedStage === 3, onClick: () => handleSelectStage(3), children: "Etapa 3" })] }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) })] }), homeData.childrens && selectedStage === 1 && (_jsx(FirstStepForm, { question: homeData, setQuestion: setHomeData })), homeData.childrens && selectedStage === 2 && _jsx(SecondStepForm, { question: homeData }), homeData.childrens && selectedStage === 3 && _jsx(ThirdStepForm, { question: homeData })] }));
};
export default FacultAndStudents;
//# sourceMappingURL=faculty_and_students.js.map