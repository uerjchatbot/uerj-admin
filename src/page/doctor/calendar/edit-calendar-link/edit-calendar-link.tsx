import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  question: Question;
  setQuestion: React.Dispatch<React.SetStateAction<Question>>;
};

const EditCalendarLink = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState(question.title);

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: text });

      setQuestion(data);

      setIsVisible(false);

      toast.success("Link alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditCalendarLink;
