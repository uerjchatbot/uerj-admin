import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as S from "./styles";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { SelectiveProcessServices } from "@/services/student/selective-process.service";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ISelectiveProcessHomeData } from "@/models/students/selective_process";

const SelectiveProcess = () => {
  const navigate = useNavigate();
  const { state }: { state: any } = useLocation();
  const { setLoading } = useLoading();

  const [selectedStage, setSelectedStage] = useState(1);
  const [selectiveProcessData, setSelectiveProcesssData] = useState<ISelectiveProcessHomeData>(
    {} as ISelectiveProcessHomeData
  );

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleSelectStage = (stageNumber: number) => setSelectedStage(stageNumber);

  const getSelectiveProcessData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await SelectiveProcessServices.getHomeData(state.childrenId);

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
        </div>

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ContainerButton>
      </S.HeaderContainer>

      {selectiveProcessData.childrens && selectedStage === 1 && (
        <FirstStepForm
          id={state.childrenId}
          title={selectiveProcessData.title}
          firstQuestion={{
            id: selectiveProcessData?.childrens[0]?.id,
            question: selectiveProcessData?.childrens[0].question,
            text: selectiveProcessData?.childrens[0].title
          }}
          secondQuestion={{
            id: selectiveProcessData?.childrens[1].id,
            question: selectiveProcessData?.childrens[1].question,
            text: selectiveProcessData?.childrens[1].title
          }}
          thirdQuestion={{
            id: selectiveProcessData?.childrens[2].id,
            question: selectiveProcessData?.childrens[2].question,
            text: selectiveProcessData?.childrens[2].title
          }}
          setHomeData={setSelectiveProcesssData}
        />
      )}

      {selectiveProcessData.childrens && selectedStage === 2 && (
        <SecondStepForm
          id={state.childrenId}
          fourthQuestion={{
            id: selectiveProcessData?.childrens[3].id,
            question: selectiveProcessData?.childrens[3].question,
            text: selectiveProcessData?.childrens[3].title
          }}
          fifthQuestion={{
            id: selectiveProcessData?.childrens[4].id,
            question: selectiveProcessData?.childrens[4].question,
            text: selectiveProcessData?.childrens[4].title
          }}
          sixthQuestion={{
            id: selectiveProcessData?.childrens[5].id,
            question: selectiveProcessData?.childrens[5].question,
            text: selectiveProcessData?.childrens[5].title
          }}
          seventhQuestion={{
            id: selectiveProcessData?.childrens[6].id,
            question: selectiveProcessData?.childrens[6].question,
            text: selectiveProcessData?.childrens[6].title
          }}
          setHomeData={setSelectiveProcesssData}
        />
      )}
    </S.Container>
  );
};

export default SelectiveProcess;
