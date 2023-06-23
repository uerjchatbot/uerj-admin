import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { DotRounded } from "../styles";
import { Container, QuestionContainer } from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditFirstQuestion = ({ question, setQuestion }: Props) => {
  const [text, setText] = useState(question.question);
  const [textInfo, setTextInfo] = useState(question.title);

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return (
      <>
        <QuestionContainer>
          <DotRounded>1</DotRounded>
          <TextEditor value={text} setValue={setText} />
        </QuestionContainer>

        <TextEditor value={textInfo} setValue={setTextInfo} />
      </>
    );
  }, [text]);

  const handleUpdate = async () => {
    try {
      const { data } = await QuestionServices.updateQuestion({
        ...question,
        title: textInfo,
        question: text
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

      <EditTextButton event={handleUpdate} />
    </Container>
  );
};

export default EditFirstQuestion;
