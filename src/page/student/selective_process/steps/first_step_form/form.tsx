import React from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { IQuestionData, ISelectiveProcessHomeData } from "@/models/students/selective_process";
import { EditQuestion } from "../../edit-modals/edit-question";

type Props = {
  id?: number;
  title?: string;
  firstQuestion?: IQuestionData;
  secondQuestion?: IQuestionData;
  thirdQuestion?: IQuestionData;
  setHomeData: React.Dispatch<React.SetStateAction<ISelectiveProcessHomeData>>;
};

const Form = ({ id, title, firstQuestion, secondQuestion, thirdQuestion, setHomeData }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleEditHomeTitle = () => {
    setTitle(`Editar Processo seletivo de bolsas`);

    const data = {
      id: id,
      questionId: id,
      title: title,
      setData: setHomeData
    };

    setComponent(<EditQuestion data={data} />);

    setIsVisible(true);
  };

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
      <S.Header>
        <p>{title}</p>

        <div>
          <Button outline={true} type={"button"}>
            <span onClick={handleEditHomeTitle}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </div>
      </S.Header>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>1</S.DotRounded>
          <span>{firstQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{firstQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                1,
                firstQuestion?.id,
                firstQuestion?.question,
                firstQuestion?.text
              )
            }>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>2</S.DotRounded>
          <span>{secondQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{secondQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                2,
                secondQuestion?.id,
                secondQuestion?.question,
                secondQuestion?.text
              )
            }>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>3</S.DotRounded>
          <span>{thirdQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{thirdQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span
            onClick={() =>
              handleOpenEditQuestionModal(
                3,
                thirdQuestion?.id,
                thirdQuestion?.question,
                thirdQuestion?.text
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
