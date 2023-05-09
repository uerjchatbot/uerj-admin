import { Dispatch, SetStateAction, useState } from "react";

import { useModal } from "@/hooks/useModal";

import { TextEditor } from "@/components/text-editor";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { toast } from "react-toastify";
import * as S from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const CreateClass = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState("");

  const updateData = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.create({
        node_chatbot_id: question.chatbot_id,
        question: "",
        title: textTitle,
        response: true
      });

      toast.success("Turma criada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao criar a turma, tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      <TextEditor value={textTitle} setValue={setTextTitle} />
      <S.Button onClick={updateData}>Salvar</S.Button>
    </S.Container>
  );
};

export default CreateClass;
