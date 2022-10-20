import React, { useState } from "react";
import { FirstStepForm } from "./first_step_form";
import { SecondStepForm } from "./second_step_form";

import * as S from "./styles";
import { ThirdStepForm } from "./third_step_form";

// type Props = {};

const FacultAndStudents = () => {
  const [selectedStage, setSelectedStage] = useState(1);

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

      {selectedStage === 1 && <FirstStepForm />}
      {selectedStage === 2 && <SecondStepForm />}
      {selectedStage === 3 && <ThirdStepForm />}
    </S.Container>
  );
};

export default FacultAndStudents;
