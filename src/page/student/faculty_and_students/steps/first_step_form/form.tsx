import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { Dispatch, SetStateAction, useState } from "react";
import { EditPageDescription } from "../../edit_modals/page_description";
import { EditQuestionItem } from "../../edit_modals/question_item";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

type ItemProps = {
  index: number;
  item: Question;
};

function QuestionItem({ item, index }: ItemProps) {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [question, setQuestion] = useState(item);

  const handleEditQuestion = (): void => {
    setTitle(`Editar ${item?.question}`);

    setComponent(<EditQuestionItem question={question} setQuestion={setQuestion} index={index} />);

    setIsVisible(true);
  };

  return (
    <S.ContentCard>
      <S.ContentCardHeader>
        <S.DotRounded>{Number(index) + 1}</S.DotRounded>

        <S.QuestionTitle dangerouslySetInnerHTML={{ __html: question.question }} />
      </S.ContentCardHeader>

      <S.Title dangerouslySetInnerHTML={{ __html: question.title }} />

      <S.ContainerButton>
        <Button outline={true} type={"button"}>
          <span onClick={handleEditQuestion}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContainerButton>
    </S.ContentCard>
  );
}

const Form = ({ question, setQuestion }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const childrens = [question.childrens[0], question.childrens[1]];

  const handleOpenEditTitleModal = (): void => {
    setTitle("Editar Corpos Docentes e Discentes");

    setComponent(<EditPageDescription question={question} setQuestion={setQuestion} />);

    setIsVisible(true);
  };

  return (
    <>
      <S.DescriptionContainer>
        {question.title && <div dangerouslySetInnerHTML={{ __html: question.title }} />}

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleOpenEditTitleModal}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </S.ContainerButton>
      </S.DescriptionContainer>

      <S.ContainerCards>
        {childrens.map((child, index) => (
          <QuestionItem item={child} index={index} key={child.id} />
        ))}
      </S.ContainerCards>
    </>
  );
};

export default Form;
