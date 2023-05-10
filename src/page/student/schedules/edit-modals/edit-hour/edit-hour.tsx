import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditHour = ({ question, setQuestion }: Props) => {
  const { setLoading } = useLoading();
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState(question.title);

  const handleUpdateHour = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) => (child.id === question.id ? data : child))
      }));

      toast.success("Horário atualizado com sucesso!");

      setIsVisible(false);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);

      toast.error("Houve um erro ao atualizar o horário");
      setLoading(false);
    }
  };

  return (
    <div>
      <TextEditor value={textTitle} setValue={setTextTitle} />;
      <EditTextButton event={handleUpdateHour} />
    </div>
  );
};

export default EditHour;
