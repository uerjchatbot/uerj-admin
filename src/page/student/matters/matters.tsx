import React, { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { IMatterData, IMattersChildrenData, IMattersHomeData } from "@/models/matters";
import MattersService from "@/services/student/matters.service";
import { EditMatterText } from "./edit-modals/matter-text";
import { formatIndexToLetter } from "@/utils/formarter";
import { HomeTitle } from "./edit-modals/home-title";
import { orderChildrens } from "@/utils/order";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import * as S from "./styles";

const Matters = () => {
  const { state }: { state: any } = useLocation();
  const { setTitle, setComponent, setIsVisible } = useModal();
  const [homeData, setHomeData] = useState<IMattersHomeData>({} as IMattersHomeData);
  const [mastersData, setMastersData] = useState<IMatterData[]>([]);
  const [doctorateData, setDoctorateData] = useState<IMatterData[]>([]);

  const getMattersData = useCallback(async () => {
    const response1 = await MattersService.getHomeData(state.childrenId);

    const childrens = orderChildrens(response1.data.childrens);
    const mastersId = childrens[0].childrens[0].id;
    const doctorateId = childrens[1].childrens[0].id;

    const response2 = await MattersService.getMatterData(mastersId);
    const response3 = await MattersService.getMatterData(doctorateId);

    setHomeData(response1.data);
    setMastersData(response2.data);
    setDoctorateData(response3.data);
  }, [state]);

  const handleNavigateBack = () => {};

  const handleOpenEditHomeTitle = () => {
    setTitle("Editar Disciplinas");

    setComponent(
      <HomeTitle questionId={homeData.id} title={homeData.title} setData={setHomeData} />
    );

    setIsVisible(true);
  };

  const handleEditMatterText = (data: IMattersChildrenData) => {
    setTitle(`Editar texto das turmas de ${data.question}`);

    setComponent(
      <EditMatterText
        title={data.title}
        fatherQuestionId={homeData.id}
        questionId={data.id}
        setData={setHomeData}
      />
    );

    setIsVisible(true);
  };

  const handleDeleteDiscipline = async (
    matterType: string,
    disciplineId: number,
    questionId: number
  ) => {
    try {
      await MattersService.deleteDiscipline(disciplineId, questionId);

      const { data } = await MattersService.getMatterData(questionId);

      if (matterType === "Mestrado") setMastersData(data);

      if (matterType === "Doutorado") setDoctorateData(data);

      toast.success("Disciplina excluida com sucesso");
    } catch (error) {
      toast.error("Houve um erro ao deletar a disciplina");
    }
  };

  useEffect(() => {
    getMattersData();
  }, [getMattersData]);

  // console.log("state:", state);
  // console.log("homeData:", homeData);
  // console.log("mastersData:", mastersData);
  // console.log("doctorageData:", doctorageData);

  return (
    <S.Container>
      <S.Header>
        <S.ButtonContainer>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ButtonContainer>

        <S.TitleContainer>
          <S.Title>{homeData.title}</S.Title>

          <Button outline={true} type={"button"}>
            <span onClick={handleOpenEditHomeTitle}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </S.TitleContainer>
      </S.Header>

      {homeData?.childrens?.map((matter, index) => {
        return (
          <S.Content key={`Matter-${index}`}>
            <S.ContentHeader>
              <S.DotRounded>{index + 1}</S.DotRounded>
              <span>{matter.question}</span>
            </S.ContentHeader>

            <S.ContentBody>
              <S.Title>{matter.title}</S.Title>

              <S.MatterHeaderContainer>
                <Button outline={true} type={"button"}>
                  <span onClick={() => handleEditMatterText(matter)}>
                    Editar <BsPencil size={16} />
                  </span>
                </Button>

                <S.AddMatter type={"button"}>
                  {/* <span onClick={handleOpenEditFirstQuestionModal}> */}
                  <span>
                    Adicionar disciplina <AiOutlinePlus size={16} />
                  </span>
                </S.AddMatter>
              </S.MatterHeaderContainer>

              <S.MattersList>
                {matter.question === "Mestrado" &&
                  mastersData?.map((matterData, index) => {
                    return (
                      <li key={`teste-${index}`}>
                        <div>
                          <strong>{formatIndexToLetter(index)} - </strong>
                          <S.Title>{matterData.matter}</S.Title>
                        </div>

                        <button>
                          <BsTrash
                            onClick={() =>
                              handleDeleteDiscipline(
                                "Mestrado",
                                matterData.index,
                                homeData.childrens[0].childrens[0].id
                              )
                            }
                          />
                        </button>
                      </li>
                    );
                  })}

                {matter.question === "Doutorado" &&
                  doctorateData?.map((matterData, index) => {
                    return (
                      <li key={`teste-${index}`}>
                        <div>
                          <strong>{formatIndexToLetter(index)} - </strong>
                          <S.Title>{matterData.matter}</S.Title>
                        </div>

                        <button>
                          <BsTrash
                            onClick={() =>
                              handleDeleteDiscipline(
                                "Doutorado",
                                matterData.index,
                                homeData.childrens[1].childrens[0].id
                              )
                            }
                          />
                        </button>
                      </li>
                    );
                  })}
              </S.MattersList>
            </S.ContentBody>
          </S.Content>
        );
      })}
    </S.Container>
  );
};

export default Matters;
