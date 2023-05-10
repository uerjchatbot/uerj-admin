import { Dispatch, SetStateAction } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { convertWhatsappTextToHtml } from "@/utils/formarter";
import { EditFirstStepEvent } from "../../edit_modals/first_step_event";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const Form = ({ question, setQuestion }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleOpenEditEventInfo = (question: Question) => {
    setTitle(`Editar ${question?.question}`);

    setComponent(<EditFirstStepEvent question={question} setQuestion={setQuestion} />);

    setIsVisible(true);
  };

  const events = question?.childrens?.slice(2);

  return (
    <>
      <S.ContainerCards>
        {events?.map((child, index) => (
          <S.ContentCard key={child.id}>
            <S.ContentCardHeader>
              <S.DotRounded>{index + 3}</S.DotRounded>
              <span>{child.question}</span>
            </S.ContentCardHeader>

            <S.Title dangerouslySetInnerHTML={{ __html: convertWhatsappTextToHtml(child.title) }} />

            <S.ContainerButton>
              <Button outline={true} type={"button"}>
                <span onClick={() => handleOpenEditEventInfo(child)}>
                  Editar <BsPencil size={16} />
                </span>
              </Button>
            </S.ContainerButton>
          </S.ContentCard>
        ))}
      </S.ContainerCards>
    </>
  );
};

export default Form;
