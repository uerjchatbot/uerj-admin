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
  index: number;
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditQuestionItem = ({ index, question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState(question.title);
  const [textQuestion, setTextQuestion] = useState(question.question);

  const renderTextEditor = useCallback(() => {
    return (
      <>
        <S.QuestionContainer>
          <DotRounded>{index + 1}</DotRounded>
          <TextEditor value={textQuestion} setValue={setTextQuestion} />
        </S.QuestionContainer>

        <TextEditor value={textTitle} setValue={setTextTitle} />
      </>
    );
  }, [textTitle, textQuestion]);

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

export default EditQuestionItem;
