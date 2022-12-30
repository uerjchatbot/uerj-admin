import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as S from "./styles";
import { useLoading } from "@/hooks/useLoading";
import { TutorialServices } from "@/services/student/tutorial.service";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { Button } from "@/components/button";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ThirdStepForm } from "./steps/third_step_form";
import { ITutorialHomeData } from "@/models/students/tutorials";

const Tutorials = () => {
  const navigate = useNavigate();
  const { state }: { state: any } = useLocation();
  const { setLoading } = useLoading();

  const [selectedStage, setSelectedStage] = useState(1);
  const [tutorialsData, setTutorialsData] = useState<ITutorialHomeData>({} as ITutorialHomeData);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

  const getSchedulesData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await TutorialServices.getHomeData(state.childrenId);

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

          <S.SwitchStageButton
            isSelected={selectedStage === 3}
            onClick={() => handleSelectStage(3)}>
            Etapa 3
          </S.SwitchStageButton>
        </div>

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ContainerButton>
      </S.HeaderContainer>

      {tutorialsData.childrens && selectedStage === 1 && (
        <FirstStepForm
          id={state.childrenId}
          title={tutorialsData.title}
          firstQuestion={tutorialsData.childrens[0]}
          setHomeData={setTutorialsData}
        />
      )}

      {tutorialsData.childrens && selectedStage === 2 && (
        <SecondStepForm
          id={state.childrenId}
          secondQuestion={tutorialsData.childrens[1]}
          setHomeData={setTutorialsData}
        />
      )}

      {tutorialsData.childrens && selectedStage === 3 && (
        <ThirdStepForm
          id={state.childrenId}
          thirdQuestion={tutorialsData.childrens[2]}
          fourthQuestion={tutorialsData.childrens[3]}
          setHomeData={setTutorialsData}
        />
      )}
    </S.Container>
  );
};

export default Tutorials;
