import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useModal } from "@/hooks/useModal";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import * as S from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditClass = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();

  const [textTitle, setTextTitle] = useState(question.title);

  const renderAddStudent = useCallback(() => {
    if (textTitle === "") return;

    return <TextEditor value={textTitle} setValue={setTextTitle} />;
  }, [textTitle]);

  const updateData = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: textTitle });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) => {
          return {
            ...child,
            childrens: child.childrens.map((c) => (c.id === question.id ? data : c))
          };
        })
      }));

      toast.success("Turma alterada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar os dados, tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      <S.ClassNameContainer></S.ClassNameContainer>

      {renderAddStudent()}

      <EditTextButton event={updateData} />
    </S.Container>
  );
};

export default EditClass;
