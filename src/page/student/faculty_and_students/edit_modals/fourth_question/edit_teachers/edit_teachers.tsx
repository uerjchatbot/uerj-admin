import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useModal } from "@/hooks/useModal";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import * as S from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditClass = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState(question.title);

  const renderWriteTeacherName = useCallback(() => {
    return <TextEditor value={textTitle} setValue={setTextTitle} />;
  }, []);

  const updateData = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) => (child.id === question.id ? data : child))
      }));

      toast.success("Professor atualizado com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar os dados, tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      {renderWriteTeacherName()}

      <EditTextButton event={updateData} />
    </S.Container>
  );
};

export default EditClass;
