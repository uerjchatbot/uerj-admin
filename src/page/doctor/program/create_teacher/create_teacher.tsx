import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

import { useModal } from "@/hooks/useModal";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import * as S from "./styles";

type Props = {
  question: Question;
  setData: Dispatch<SetStateAction<Question>>;
};

const CreateTeacher = ({ question, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [teacher, setTeacher] = useState<string>("Professor(a) ");

  const handleCreateTeacher = async () => {
    try {
      const { data } = await QuestionServices.create({
        node_chatbot_id: question.chatbot_id,
        question: "",
        title: teacher,
        response: true
      });

      setData((state) => ({
        ...state,
        childrens: state.childrens.map((child) => {
          return child.id === question.id
            ? { ...child, childrens: [...child.childrens, data] }
            : child;
        })
      }));

      toast.success("Professor adicionado com sucesso!");
      setIsVisible(false);
    } catch (error) {
      console.log("error: ", error);
      toast.error("Erro ao tentar adicionar um professor");
    }
  };

  return (
    <S.Container>
      <S.ClassNameContainer>
        <TextEditor value={teacher} setValue={setTeacher} />
      </S.ClassNameContainer>

      <EditTextButton event={handleCreateTeacher} />
    </S.Container>
  );
};

export default CreateTeacher;
