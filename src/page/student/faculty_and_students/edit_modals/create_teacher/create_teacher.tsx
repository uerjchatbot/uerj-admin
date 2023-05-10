import { Dispatch, SetStateAction, useState } from "react";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { toast } from "react-toastify";
import * as S from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const CreateTeacher = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState("");

  const handleCreateTeacher = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.create({
        node_chatbot_id: question.chatbot_id,
        question: "",
        title: textTitle,
        response: true
      });

      setQuestion((state) => ({ ...state, childrens: [...state.childrens, data] }));

      toast.success("Professor(a) criado(a) com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao criar o professor(a), tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      <S.SetStudentNameContainer>
        <TextEditor value={textTitle} setValue={setTextTitle} />
      </S.SetStudentNameContainer>

      <EditTextButton event={handleCreateTeacher} />
    </S.Container>
  );
};

export default CreateTeacher;
