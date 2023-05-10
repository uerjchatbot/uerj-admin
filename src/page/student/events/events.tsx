import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useLoading } from "@/hooks/useLoading";

import { Button } from "@/components/button";
import { Question } from "@/models/Question";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

const Events = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state } = useLocation() as UseLocationState;

  const [selectedStage, setSelectedStage] = useState(1);

  const [homeData, setHomeData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await QuestionServices.getQuestion(state);

      setHomeData(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        <div>
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
        </div>

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ContainerButton>
      </S.HeaderContainer>

      {selectedStage === 1 && <FirstStepForm question={homeData} setQuestion={setHomeData} />}

      {selectedStage === 2 && <SecondStepForm question={homeData} setQuestion={setHomeData} />}
    </S.Container>
  );
};

export default Events;
