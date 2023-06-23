import { Dispatch, SetStateAction, useState } from "react";
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

const CreateHour = ({ question, setQuestion }: Props) => {
  const { setLoading } = useLoading();
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState("");

  const handleCreateHour = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.create({
        node_chatbot_id: question.chatbot_id,
        question: "",
        title: textTitle,
        response: true
      });

      setQuestion((state) => ({ ...state, childrens: [...state.childrens, data] }));

      toast.success("Horário criado com sucesso!");

      setIsVisible(false);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);

      toast.error("Houve um erro ao criar o horário");
      setLoading(false);
    }
  };

  return (
    <div>
      <TextEditor value={textTitle} setValue={setTextTitle} />;
      <EditTextButton event={handleCreateHour} />
    </div>
  );
};

export default CreateHour;
