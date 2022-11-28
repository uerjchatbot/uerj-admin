import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { useLoading } from "@/hooks/useLoading";

import * as S from "./styles";
import { FirstStepForm } from "./steps/first_step_form";
import { SecondStepForm } from "./steps/second_step_form";
import { ThirdStepForm } from "./steps/third_step_form";
import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { orderChildrens } from "@/utils/order";
import { ITeachingStaffData } from "@/models/teaching-staff";

const FacultAndStudents = () => {
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();

  const [selectedStage, setSelectedStage] = useState(1);
  const [homeData, setHomeData] = useState<ITeachingStaffData>({} as ITeachingStaffData);
  const [ffp, setFfp] = useState<ITeachingStaffData>({} as ITeachingStaffData);
  const [coordination, setCoordination] = useState<ITeachingStaffData>({} as ITeachingStaffData);
  const [representation, setRepresentation] = useState<ITeachingStaffData>(
    {} as ITeachingStaffData
  );
  const [teachers, setTeachers] = useState<ITeachingStaffData>({} as ITeachingStaffData);

  const getFfpData = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await TeachingStaffServices.getHomeData(homeData.childrens[0].id);

      data.childrens = orderChildrens(data.childrens);

      setFfp(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações da FFP.");
      setLoading(false);
    }
  };

  const getCoordinationData = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await TeachingStaffServices.getHomeData(homeData.childrens[1].id);

      data.childrens = orderChildrens(data.childrens);

      setCoordination(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações da Coordenação.");
      setLoading(false);
    }
  };

  const getRepresentationData = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await TeachingStaffServices.getHomeData(homeData.childrens[2].id);

      data.childrens = orderChildrens(data.childrens);

      setRepresentation(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações da Representação Estudantil.");
      setLoading(false);
    }
  };

  const getTeachersData = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await TeachingStaffServices.getHomeData(homeData.childrens[3].id);

      data.childrens = orderChildrens(data.childrens);

      setTeachers(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações dos Professores.");
      setLoading(false);
    }
  };

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

  useEffect(() => {
    if (homeData.childrens) {
      getFfpData();
      getCoordinationData();
      getRepresentationData();
      getTeachersData();
    }
  }, [homeData]);

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
          ffp={ffp}
          setFfp={setFfp}
          coordination={coordination}
          setCoordination={setCoordination}
          setData={setHomeData}
        />
      )}

      {homeData.childrens && selectedStage === 2 && (
        <SecondStepForm representation={representation} setRepresentation={setRepresentation} />
      )}

      {homeData.childrens && selectedStage === 3 && <ThirdStepForm teachers={teachers} />}
    </S.Container>
  );
};

export default FacultAndStudents;
