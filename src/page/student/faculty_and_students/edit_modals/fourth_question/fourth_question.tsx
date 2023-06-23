import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { DotRounded } from "../../styles";
import * as S from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditThirdQuestion = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textQuestion, setTextQuestion] = useState(question.question);
  const [textTitle, setTextTitle] = useState(question.title);

  const renderTextEditor = useCallback(() => {
    if (textTitle.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>4</DotRounded>
          <S.Input defaultValue={textQuestion} onChange={(e) => setTextQuestion(e.target.value)} />
        </S.QuestionContainer>

        <TextEditor value={textTitle} setValue={setTextTitle} />
      </>
    );
  }, [textTitle, textQuestion]);

  const handleEditText = async () => {
    try {
      const { data } = await QuestionServices.updateQuestion({
        ...question,
        title: textTitle,
        question: textQuestion
      });

      setQuestion({ ...question, ...data });

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao editar os textos, tente novamente mais tarde");
    }
  };

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditThirdQuestion;
