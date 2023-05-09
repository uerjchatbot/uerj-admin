import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditHandbagQuestion = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textQuestion, setTextQuestion] = useState(question.question);
  const [textTitle, setTextTitle] = useState(question.title);

  const renderTextEditor = useCallback(() => {
    if (textQuestion.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>4</DotRounded>

          <TextEditor value={textQuestion} setValue={setTextQuestion} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span></span>
          <TextEditor value={textTitle} setValue={setTextTitle} />
        </S.QuestionContainer>
      </>
    );
  }, [question]);

  const handleEditText = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({
        ...question,
        title: textTitle,
        question: textQuestion
      });

      setQuestion(data);

      setIsVisible(false);
      toast.success("Textos alterados com sucesso!");
    } catch (error) {
      console.log("error:", error);
      toast.error("Houve um erro ao salvar o texto");
    }
  };

  return (
    <>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </>
  );
};

export default EditHandbagQuestion;
