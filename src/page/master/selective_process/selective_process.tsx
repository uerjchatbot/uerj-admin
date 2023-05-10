import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useLoading } from "@/hooks/useLoading";

import { Button } from "@/components/button";
import { Question } from "@/models/Question";
import { IFirstStepData, ISecondStepData, IThirdStepData } from "@/models/doctor";
import { MASTER_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ThirdStepForm } from "./steps/third_step_form";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

const SelectiveProcesss = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state } = useLocation() as UseLocationState;

  const [selectedStage, setSelectedStage] = useState(1);
  const [homeData, setHomeData] = useState<Question>({} as Question);
  const [firstStepData, setFirstStepData] = useState<IFirstStepData>({} as IFirstStepData);
  const [secondStepData, setSecondStepData] = useState<ISecondStepData>({} as ISecondStepData);
  const [thirdStepData, setThirdStepData] = useState<IThirdStepData>({} as IThirdStepData);
  const handleNavigateBack = () => navigate(MASTER_PATH());

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await QuestionServices.getQuestion(state);

      setHomeData(data);

      setFirstStepData({
        notice: data.childrens[0],
        vacancies: data.childrens[1],
        quotas: data.childrens[2],
        registration: data.childrens[3]
      });

      setSecondStepData({
        documentation: data.childrens[4],
        steps: data.childrens[5],
        discretion: data.childrens[6],
        enrollment: data.childrens[7]
      });

      setThirdStepData({
        results: data.childrens[8],
        resources: data.childrens[9]
      });

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

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ContainerButton>
      </S.HeaderContainer>

      {homeData.childrens && selectedStage === 1 && <FirstStepForm data={firstStepData} />}

      {homeData.childrens && selectedStage === 2 && <SecondStepForm data={secondStepData} />}

      {homeData.childrens && selectedStage === 3 && <ThirdStepForm data={thirdStepData} />}
    </S.Container>
  );
};

export default SelectiveProcesss;
