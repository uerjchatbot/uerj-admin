import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "@/components/button";

import * as S from "./styles";
import MattersService from "@/services/student/matters.service";
import { IMattersHomeData } from "@/models/matters";
import { BsPencil, BsTrash } from "react-icons/bs";
import { formatIndexToLetter } from "@/utils/formarter";

// type Props = {};

const Matters = () => {
  const { state }: { state: any } = useLocation();
  const [homeData, setHomeData] = useState<IMattersHomeData>({} as IMattersHomeData);

  const getMattersData = useCallback(async () => {
    const { data } = await MattersService.getHomeData(state.childrenId);

    console.log("data:", data);

    setHomeData(data);
  }, [state]);

  const handleNavigateBack = () => {};

  const handleOpenAddMatterModal = () => {};

  useEffect(() => {
    getMattersData();
  }, [getMattersData]);

  // console.log("state:", state);
  console.log("homeData:", homeData);

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

                <Button outline={true} type={"button"}>
                  {/* <span onClick={handleOpenEditFirstQuestionModal}> */}
                  <span>
                    Adicionar disciplina <AiOutlinePlus size={16} />
                  </span>
                </Button>
              </S.MatterHeaderContainer>

              <S.MattersList>
                {matter?.childrens?.map((matterData, index) => {
                  return (
                    <li key={`teste-${index}`}>
                      <div>
                        <strong>{formatIndexToLetter(index)} - </strong>
                        <S.Title>{matterData.title}</S.Title>
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
