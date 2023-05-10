import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { Question } from "@/models/Question";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

const Tutorials = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as UseLocationState;
  const { setLoading } = useLoading();

  const [selectedStage, setSelectedStage] = useState(1);
  const [tutorialsData, setTutorialsData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

  const getSchedulesData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setTutorialsData(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados dos horários");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSchedulesData();
  }, [state]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <div className="switch-step-container">
          <S.SwitchStageButton
            isSelected={selectedStage === 1}
            onClick={() => handleSelectStage(1)}>
            Etapa 1
          </S.SwitchStageButton>

          <S.SwitchStageButton
            isSelected={selectedStage === 2}
            onClick={() => handleSelectStage(2)}>
            Etapa 2
          </S.SwitchStageButton>

          {/* <S.SwitchStageButton
            isSelected={selectedStage === 3}
            onClick={() => handleSelectStage(3)}>
            Etapa 3
          </S.SwitchStageButton> */}
        </div>

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ContainerButton>
      </S.HeaderContainer>

      {tutorialsData.childrens && selectedStage === 1 && (
        <FirstStepForm question={tutorialsData} setQuestion={setTutorialsData} />
      )}

      {tutorialsData.childrens && selectedStage === 2 && (
        <SecondStepForm question={tutorialsData} setQuestion={setTutorialsData} />
      )}
    </S.Container>
  );
};

export default Tutorials;
