import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditFirstStepEvent = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState(question.title);

  const handleEditText = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) => (child.id === question.id ? data : child))
      }));

      setIsVisible(false);

      toast.success("Textos alterados com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao salvar o texto");
    }
  };

  return (
    <>
      <TextEditor value={textTitle} setValue={setTextTitle} />

      <EditTextButton event={handleEditText} />
    </>
  );
};

export default EditFirstStepEvent;
