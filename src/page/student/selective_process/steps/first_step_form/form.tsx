import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { Dispatch, SetStateAction } from "react";
import { CardItem } from "../../cards/card-item";
import { EditQuestion } from "../../edit-modals/edit-question";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const Form = ({ setQuestion, question }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleEditHomeTitle = () => {
    setTitle(`Editar Processo seletivo de bolsas`);

    setComponent(<EditQuestion question={question} setQuestion={setQuestion} />);

    setIsVisible(true);
  };

  const childrens = [question?.childrens[0]];

  return (
    <S.Container>
      <S.Header>
        <p>{question.title}</p>

        <div>
          <Button outline={true} type={"button"}>
            <span onClick={handleEditHomeTitle}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </div>
      </S.Header>

      {childrens?.map((child, index) => (
        <CardItem key={child.id} question={child} index={index + 1} />
      ))}
    </S.Container>
  );
};

export default Form;
