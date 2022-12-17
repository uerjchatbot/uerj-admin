import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash } from "react-icons/bs";

import { Button } from "@/components/button";

import * as S from "./styles";
import MattersService from "@/services/student/matters.service";
import { IMatterData, IMattersHomeData } from "@/models/matters";
import { formatIndexToLetter } from "@/utils/formarter";

// type Props = {};

const Matters = () => {
  const { state }: { state: any } = useLocation();
  const [homeData, setHomeData] = useState<IMattersHomeData>({} as IMattersHomeData);
  const [mastersData, setMastersData] = useState<IMatterData[]>([]);
  const [doctorageData, setDoctorageData] = useState<IMatterData[]>([]);

  const getMattersData = useCallback(async () => {
    const response1 = await MattersService.getHomeData(state.childrenId);

    const childrens = response1.data.childrens;
    const mastersId = childrens[0].childrens[0].id;
    const doctorateId = childrens[1].childrens[0].id;

    const response2 = await MattersService.getMatterData(mastersId);
    const response3 = await MattersService.getMatterData(doctorateId);

    setHomeData(response1.data);
    setMastersData(response2.data);
    setDoctorageData(response3.data);
  }, [state]);

  const handleNavigateBack = () => {};

  const handleOpenAddMatterModal = () => {};

  useEffect(() => {
    getMattersData();
  }, [getMattersData]);

  // console.log("state:", state);
  console.log("homeData:", homeData);
  console.log("mastersData:", mastersData);
  console.log("doctorageData:", doctorageData);

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
            {/* <span onClick={handleOpenEditFirstQuestionModal}> */}
            <span>
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
                  {/* <span onClick={handleOpenEditFirstQuestionModal}> */}
                  <span>
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
                          // onClick={() =>
                          //   handleDeleteClass(
                          //     index2,
                          //     childrenIds[index],
                          //     representationClass.question
                          //   )
                          // }
                          />
                        </button>
                      </li>
                    );
                  })}

                {matter.question === "Doutorado" &&
                  doctorageData?.map((matterData, index) => {
                    return (
                      <li key={`teste-${index}`}>
                        <div>
                          <strong>{formatIndexToLetter(index)} - </strong>
                          <S.Title>{matterData.matter}</S.Title>
                        </div>

                        <button>
                          <BsTrash
                          // onClick={() =>
                          //   handleDeleteClass(
                          //     index2,
                          //     childrenIds[index],
                          //     representationClass.question
                          //   )
                          // }
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
