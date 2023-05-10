import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { EditQuestion } from "../../edit-modals/edit-question";

import { CartChildItem } from "../card-child-item";
import * as S from "./styles";

type Props = {
  question: Question;
};

export const CardItem = ({ question, index }: Props & { index: number }) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [child, setChild] = useState<Question>({} as Question);

  const getData = async () => {
    try {
      const { data } = await QuestionServices.getQuestion(question);

      setChild(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleOpenEditQuestionModal = (question: Question) => {
    setTitle(`Editar ${question.question}`);

    setComponent(<EditQuestion question={question} setQuestion={setChild} />);

    setIsVisible(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.ContentCard>
      <S.ContentCardHeader>
        <S.DotRounded>{index}</S.DotRounded>
        <span>{child?.question}</span>
      </S.ContentCardHeader>

      <div>
        <p>{child?.title}</p>
      </div>

      <Button outline={true} type={"button"}>
        <span onClick={() => handleOpenEditQuestionModal(child)}>
          Editar <BsPencil size={16} />
        </span>
      </Button>

      {child?.childrens?.map((c, indexc) => (
        <CartChildItem index={indexc} question={c} key={c.id} />
      ))}
    </S.ContentCard>
  );
};
