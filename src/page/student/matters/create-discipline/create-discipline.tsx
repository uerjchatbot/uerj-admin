import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";

import { TextEditor } from "@/components/text-editor";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const CreateDiscipline = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  const handleCreateDiscipline = async () => {
    try {
      const { data } = await QuestionServices.create({
        node_chatbot_id: question.chatbot_id,
        question: "",
        title: text,
        response: true
      });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) =>
          child.id === question.id
            ? {
                ...child,
                childrens: [...child.childrens, data]
              }
            : child
        )
      }));

      toast.success("Disciplina criada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao criar a disciplina");
    }
  };

  return (
    <div>
      <TextEditor value={text} setValue={setText} />

      <EditTextButton event={handleCreateDiscipline} />
    </div>
  );
};

export default CreateDiscipline;
