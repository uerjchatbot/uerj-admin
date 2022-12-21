import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useLoading } from "@/hooks/useLoading";

import * as S from "./styles";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { orderChildrens } from "@/utils/order";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { Button } from "@/components/button";
import { EventServices } from "@/services/student/events.service";
import { IEventsHomeData } from "@/models/events";

const Events = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();

  const [selectedStage, setSelectedStage] = useState(1);

  const [homeData, setHomeData] = useState<IEventsHomeData>({} as IEventsHomeData);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await EventServices.getHomeData(state.childrenId);

      data.childrens = orderChildrens(data.childrens);

      setHomeData(data);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
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

      {selectedStage === 1 && (
        <FirstStepForm
          title={homeData.title}
          firstEvent={homeData.childrens && homeData.childrens[0]}
          secondEvent={homeData.childrens && homeData.childrens[1]}
        />
      )}

      {selectedStage === 2 && (
        <SecondStepForm
          thirdEvent={homeData.childrens && homeData.childrens[2]}
          fourthEvent={homeData.childrens && homeData.childrens[3]}
          fifthEvent={homeData.childrens && homeData.childrens[4]}
        />
      )}
    </S.Container>
  );
};

export default Events;
