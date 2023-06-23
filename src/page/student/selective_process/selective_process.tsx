import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { Question } from "@/models/Question";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question.service";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ThirdStepForm } from "./steps/second_step_form copy";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

const SelectiveProcess = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as UseLocationState;
  const { setLoading } = useLoading();

  const [selectedStage, setSelectedStage] = useState(1);
  const [selectiveProcessData, setSelectiveProcesssData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

  const getSelectiveProcessData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setSelectiveProcesssData(data);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      toast.error("Houve um erro ao pegar as informações da página");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSelectiveProcessData();
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

          <S.SwitchStageButton
            isSelected={selectedStage === 3}
            onClick={() => handleSelectStage(3)}>
            Etapa 2
          </S.SwitchStageButton>
        </div>

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ContainerButton>
      </S.HeaderContainer>

      {selectiveProcessData.childrens && selectedStage === 1 && (
        <FirstStepForm question={selectiveProcessData} setQuestion={setSelectiveProcesssData} />
      )}

      {selectiveProcessData.childrens && selectedStage === 2 && (
        <SecondStepForm question={selectiveProcessData} />
      )}

      {selectiveProcessData.childrens && selectedStage === 3 && (
        <ThirdStepForm question={selectiveProcessData} />
      )}
    </S.Container>
  );
};

export default SelectiveProcess;
