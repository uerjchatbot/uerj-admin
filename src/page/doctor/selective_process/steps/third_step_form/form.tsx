import React from "react";
import { BsPencil } from "react-icons/bs";

import { useLoading } from "@/hooks/useLoading";
import * as S from "./styles";

import { IThirdStepData } from "@/models/teaching-staff";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
// import { EditPageDescription } from "../../edit_modals/page_description";
// import { EditFirstQuestion } from "../../edit_modals/first_question";
// import { EditSecondQuestion } from "../../edit_modals/second_question";

type Props = {
  data?: IThirdStepData;
  setData: React.Dispatch<React.SetStateAction<IThirdStepData>>;
};

const Form = ({ data, setData }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();
  const { setLoading } = useLoading();

  const handleOpenEditFirstQuestionModal = (): void => {
    // setTitle(`Editar ${ffp?.question}`);

    // setComponent(<EditFirstQuestion ffp={ffp} setFfp={setFfp} />);

    setIsVisible(true);
  };

  const handleOpenEditSecondQuestionModal = (): void => {
    // setTitle(`Editar ${coordination?.question}`);

    // setComponent(
    //   <EditSecondQuestion coordination={coordination} setCoordination={setCoordination} />
    // );

    setIsVisible(true);
  };

  return (
    <>
      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>9</S.DotRounded>
            {data && <span>{data.results.question}</span>}
          </S.ContentCardHeader>

          <p>{data && data.results.title}</p>

          {data && data.results.childrens[0] && (
            <S.CardItem>
              <span>
                <strong>1</strong> - {data.results.childrens[0].question}
              </span>
              <p>{data.results.childrens[0].title}</p>
            </S.CardItem>
          )}

          {data && (
            <S.CardItem>
              <span>
                <strong>2</strong> - {data.results.childrens[1].question}
              </span>
              <p>{data.results.childrens[1].title}</p>
            </S.CardItem>
          )}

          {data && (
            <S.CardItem>
              <span>
                <strong>3</strong> - {data.results.childrens[2].question}
              </span>
              <p>{data.results.childrens[2].title}</p>
            </S.CardItem>
          )}

          {data && (
            <S.CardItem>
              <span>
                <strong>4</strong> - {data.results.childrens[3].question}
              </span>
              <p>{data.results.childrens[3].title}</p>
            </S.CardItem>
          )}

          {data && (
            <S.CardItem>
              <span>
                <strong>5</strong> - {data.results.childrens[4].question}
              </span>
              <p>{data.results.childrens[4].title}</p>
            </S.CardItem>
          )}

          {data && (
            <S.CardItem>
              <span>
                <strong>6</strong> - {data.results.childrens[5].question}
              </span>
              <p>{data.results.childrens[5].title}</p>
            </S.CardItem>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditFirstQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>10</S.DotRounded>
            {data && <span>{data.resources.question}</span>}
          </S.ContentCardHeader>

          <p>{(data && data.resources.title) || "Um texto aqui"}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditSecondQuestionModal}>
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
