import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { DotRounded } from "../../styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditProjectQuestion = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textQuestion, setTextQuestion] = useState<string>(question?.question || "");
  const [textTitle, setTextTitle] = useState<string>(question.title || "");

  const renderTextEditor = useCallback(() => {
    if (textQuestion.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>3</DotRounded>

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

export default EditProjectQuestion;
