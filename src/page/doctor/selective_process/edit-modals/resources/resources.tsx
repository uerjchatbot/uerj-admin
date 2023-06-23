import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { DotRounded } from "../../styles";

type Props = {
  resources: Question;
  setResources: Dispatch<SetStateAction<Question>>;
};

const EditResourcesQuestion = ({ resources, setResources }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(resources.question);
  const [title, setTitle] = useState<string>(resources.title);

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>10</DotRounded>

          <TextEditor value={question} setValue={setQuestion} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span></span>
          <TextEditor value={title} setValue={setTitle} />
        </S.QuestionContainer>
      </>
    );
  }, [question]);

  const handleEditText = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.updateQuestion({
        ...resources,
        title,
        question
      });

      setResources(data);
      setIsVisible(false);
      toast.success("Textos alterados com sucesso!");
    } catch (error) {
      console.log("error:", error);
      toast.error("Houve um erro ao salvar o texto");
    }
  };

  return (
    <>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </>
  );
};

export default EditResourcesQuestion;
