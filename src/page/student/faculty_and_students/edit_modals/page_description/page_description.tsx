import { Dispatch, SetStateAction, useCallback, useState } from "react";

import { TextEditor } from "@/components/text-editor";

import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { toast } from "react-toastify";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const PageDescription = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState(question.title);

  const renderTextEditor = useCallback(() => {
    if (question.title.length === 0) return <></>;

    return (
      <>
        <TextEditor value={textTitle} setValue={setTextTitle} />
      </>
    );
  }, [question.title]);

  const handleEditText = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });

      setQuestion(data);

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  return (
    <>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </>
  );
};

export default PageDescription;
