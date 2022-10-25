import React, { useState, useEffect } from "react";

import { useLoading } from "@/hooks/useLoading";
import { StudentServices } from "@/services/student/home.service";

import * as S from "./styles";
import { FirstStepForm } from "./first_step_form";
import { SecondStepForm } from "./second_step_form";
import { ThirdStepForm } from "./third_step_form";

// type Props = {};

const FacultAndStudents = () => {
  const { setLoading } = useLoading();

  const [selectedStage, setSelectedStage] = useState(1);
  const [title, setTitle] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await StudentServices.getTeachingStaffData();

      console.log("data:", data);
      setTitle(data.title);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
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

      {selectedStage === 1 && <FirstStepForm title={title} />}
      {selectedStage === 2 && <SecondStepForm />}
      {selectedStage === 3 && <ThirdStepForm />}
    </S.Container>
  );
};

export default FacultAndStudents;
