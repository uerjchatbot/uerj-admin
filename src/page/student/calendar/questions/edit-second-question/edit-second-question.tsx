import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { DotRounded } from "../../styles";
import { Container, QuestionContainer } from "./style";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditSecondQuestion = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textQuestion, setTextQuestion] = useState(question.question);
  const [textTitle, setTextTitle] = useState(question.title);

  const renderTextEditor = useCallback(() => {
    if (question.title.length === 0) return <></>;

    return (
      <>
        <QuestionContainer>
          <DotRounded>2</DotRounded>
          <TextEditor value={textQuestion} setValue={setTextQuestion} />
        </QuestionContainer>

        <TextEditor value={textTitle} setValue={setTextTitle} />
      </>
    );
  }, [question.title]);

  const handleEditDates = async () => {
    try {
      const { data } = await QuestionServices.updateQuestion({
        ...question,
        title: textTitle,
        question: textQuestion
      });

      setQuestion(data);

      setIsVisible(false);

      toast.success("Título e datas alteradas com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  return (
    <Container>
      {renderTextEditor()}

      <EditTextButton event={handleEditDates} />
    </Container>
  );
};

export default EditSecondQuestion;
