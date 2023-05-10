import { Dispatch, SetStateAction } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { EditQuestion } from "../../edit-modals/edit-question";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const Form = ({ question, setQuestion }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleOpenEditQuestionModal = (question: Question) => {
    setTitle(`Editar ${question.question}`);

    setComponent(<EditQuestion question={question} setQuestion={setQuestion} />);

    setIsVisible(true);
  };
  const tutorials = question?.childrens?.slice(3);

  return (
    <S.Container>
      {tutorials.map((child, index) => (
        <S.ContentCard key={child.id}>
          <S.ContentCardHeader>
            <S.DotRounded>{index + 4}</S.DotRounded>
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
        </S.ContentCard>
      ))}
    </S.Container>
  );
};

export default Form;
