import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const HomeTitle = ({ question, setQuestion }: Props) => {
  const { setLoading } = useLoading();
  const { setIsVisible } = useModal();

  const [text, setText] = useState(question.title);

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.updateQuestion({ ...question, title: text });

      setQuestion((state) => ({ ...state, ...data }));

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao salvar o texto");
      setLoading(false);
    }
  };

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default HomeTitle;
