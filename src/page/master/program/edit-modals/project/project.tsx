import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { MasterProcessServices } from "@/services/master/process.service";
import { DotRounded } from "../../styles";
import { IMasterDefaultData, IMasterProgram } from "@/models/master";

type Props = {
  childrens?: IMasterProgram;
  setData: React.Dispatch<React.SetStateAction<IMasterProgram>>;
};

const EditProjectQuestion = ({ childrens, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(childrens?.project?.question || "");
  const [title, setTitle] = useState<string>(childrens?.project.title || "");

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>3</DotRounded>

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
          id: childrens?.project.id,
          title,
          question
        });

        const data: IMasterDefaultData = {
          ...node.data
        };

        setData({
          ...childrens,
          project: data
        } as IMasterProgram);

        setIsVisible(false);
        toast.success("Textos alterados com sucesso!");
      } else {
        toast.error("Os dados não foram carregado corretamente, tente novamente!");
      }
    } catch (error) {
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

export default EditProjectQuestion;
