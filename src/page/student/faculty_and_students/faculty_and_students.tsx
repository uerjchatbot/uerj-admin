import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { useLoading } from "@/hooks/useLoading";

import * as S from "./styles";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ThirdStepForm } from "./steps/third_step_form";
import { TeachingStaffServices } from "@/services/student/teachint-staff.service";
import { orderChildrens } from "@/utils/order";
import { ITeachingStaffData } from "@/models/teaching-staff";

const FacultAndStudents = () => {
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();

  const [selectedStage, setSelectedStage] = useState(1);
  const [homeData, setHomeData] = useState<ITeachingStaffData>({} as ITeachingStaffData);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await TeachingStaffServices.getHomeData(state.childrenId);

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

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

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

          <S.SwitchStageButton
            isSelected={selectedStage === 3}
            onClick={() => handleSelectStage(3)}>
            Etapa 3
          </S.SwitchStageButton>
        </div>

        <div>
          <S.BackButton>Voltar</S.BackButton>
        </div>
      </S.HeaderContainer>

      {homeData.childrens && selectedStage === 1 && (
        <FirstStepForm
          homeDataId={homeData.id}
          title={homeData?.title}
          ffp={homeData?.childrens[0]}
          coordination={homeData?.childrens[1]}
          setData={setHomeData}
        />
      )}
      {homeData.childrens && selectedStage === 2 && (
        <SecondStepForm representation={homeData?.childrens[2]} />
      )}
      {homeData.childrens && selectedStage === 3 && (
        <ThirdStepForm teachers={homeData?.childrens[3]} />
      )}
    </S.Container>
  );
};

export default FacultAndStudents;
