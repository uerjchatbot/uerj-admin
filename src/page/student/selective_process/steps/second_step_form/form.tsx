import * as S from "./styles";

import { Question } from "@/models/Question";
import { CardItem } from "../../cards/card-item";

type Props = {
  question: Question;
};

const Form = ({ question }: Props) => {
  const childrens = [question?.childrens[1]];

  return (
    <S.Container>
      {childrens?.map((child, index) => (
        <CardItem key={child.id} question={child} index={index + 2} />
      ))}
    </S.Container>
  );
};

export default Form;
