import React from "react";
import { BsPencil } from "react-icons/bs";

import { Button } from "@/components/button";
import * as S from "./styles";
import { useModal } from "@/hooks/useModal";
import { IQuestionData, ISelectiveProcessHomeData } from "@/models/students/selective_process";
import { EditQuestion } from "../../edit-modals/edit-question";

type Props = {
  id?: number;
  fourthQuestion?: IQuestionData;
  fifthQuestion?: IQuestionData;
  sixthQuestion?: IQuestionData;
  seventhQuestion?: IQuestionData;
  setHomeData: React.Dispatch<React.SetStateAction<ISelectiveProcessHomeData>>;
};

const Form = ({
  id,
  fourthQuestion,
  fifthQuestion,
  sixthQuestion,
  seventhQuestion,
  setHomeData
}: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleOpenEditQuestionModal = (
    questionIndex: number,
    questionId = 0,
    question = "",
    text = ""
  ) => {
    setTitle(`Editar ${question}`);

    const data = {
      id: id,
      index: questionIndex,
      questionId: questionId,
      question: question,
      title: text,
      setData: setHomeData
    };

    setComponent(<EditQuestion data={data} />);

    setIsVisible(true);
  };

  return (
    <S.Container>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>4</S.DotRounded>
          <span>{fourthQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{fourthQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                4,
                fourthQuestion?.id,
                fourthQuestion?.question,
                fourthQuestion?.text
              )
            }>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>5</S.DotRounded>
          <span>{fifthQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{fifthQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                5,
                fifthQuestion?.id,
                fifthQuestion?.question,
                fifthQuestion?.text
              )
            }>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>6</S.DotRounded>
          <span>{sixthQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{sixthQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                6,
                sixthQuestion?.id,
                sixthQuestion?.question,
                sixthQuestion?.text
              )
            }>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>7</S.DotRounded>
          <span>{seventhQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{seventhQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                7,
                seventhQuestion?.id,
                seventhQuestion?.question,
                seventhQuestion?.text
              )
            }>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>
    </S.Container>
  );
};

export default Form;
