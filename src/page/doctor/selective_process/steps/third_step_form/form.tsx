import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { IDoctorDefaultData, IThirdStepData } from "@/models/doctor";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditResourcesQuestion } from "../../edit-modals/resources";
import { EditResultsQuestion } from "../../edit-modals/results";

type Props = {
  data?: IThirdStepData;
};

const Form = ({ data }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [resources, setResources] = useState<IDoctorDefaultData>(
    data?.resources as IDoctorDefaultData
  );

  const [results, setResults] = useState<IDoctorDefaultData>(data?.results as IDoctorDefaultData);

  const handleOpenEditResultsQuestionModal = (): void => {
    setTitle(`Editar ${results?.question}`);

    setComponent(<EditResultsQuestion results={results} setResults={setResults} />);

    setIsVisible(true);
  };

  const handleOpenEditResourcesQuestionModal = (): void => {
    setTitle(`Editar ${resources?.question}`);

    setComponent(<EditResourcesQuestion resources={resources} setResources={setResources} />);

    setIsVisible(true);
  };

  return (
    <>
      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>9</S.DotRounded>
            {results && <span>{results.question}</span>}
          </S.ContentCardHeader>

          <p>{results && results.title}</p>

          {results && results.childrens[0] && (
            <S.CardItem>
              <span>
                <strong>1</strong> - {results.childrens[0].question}
              </span>
              <p>{results.childrens[0].title}</p>
            </S.CardItem>
          )}

          {results && (
            <S.CardItem>
              <span>
                <strong>2</strong> - {results.childrens[1].question}
              </span>
              <p>{results.childrens[1].title}</p>
            </S.CardItem>
          )}

          {results && (
            <S.CardItem>
              <span>
                <strong>3</strong> - {results.childrens[2].question}
              </span>
              <p>{results.childrens[2].title}</p>
            </S.CardItem>
          )}

          {results && (
            <S.CardItem>
              <span>
                <strong>4</strong> - {results.childrens[3].question}
              </span>
              <p>{results.childrens[3].title}</p>
            </S.CardItem>
          )}

          {results && (
            <S.CardItem>
              <span>
                <strong>5</strong> - {results.childrens[4].question}
              </span>
              <p>{results.childrens[4].title}</p>
            </S.CardItem>
          )}

          {results && (
            <S.CardItem>
              <span>
                <strong>6</strong> - {results.childrens[5].question}
              </span>
              <p>{results.childrens[5].title}</p>
            </S.CardItem>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditResultsQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>10</S.DotRounded>
            {resources && <span>{resources.question}</span>}
          </S.ContentCardHeader>

          <p>{(resources && resources.title) || "Um texto aqui"}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditResourcesQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
