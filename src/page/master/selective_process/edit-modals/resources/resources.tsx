import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { MasterProcessServices } from "@/services/master/process.service";
import { DotRounded } from "../../styles";
import { IMasterDefaultData } from "@/models/master";

type Props = {
  resources?: IMasterDefaultData;
  setResources: React.Dispatch<React.SetStateAction<IMasterDefaultData>>;
};

const EditResourcesQuestion = ({ resources, setResources }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(resources?.question || "");
  const [title, setTitle] = useState<string>(resources?.title || "");

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
      if (question && title) {
        const node = await MasterProcessServices.updateData({
          id: resources?.id,
          title,
          question
        });

        const data: IMasterDefaultData = {
          ...node.data
        };

        setResources(data);
        setIsVisible(false);
        toast.success("Textos alterados com sucesso!");
      } else {
        toast.error("Os dados não foram carregado corretamente, tente novamente!");
      }
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
