import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { DoctorProcessServices } from "@/services/doctor/process.service";
import { DotRounded } from "../../styles";
import { IDoctorDefaultData, IDoctorProgram } from "@/models/doctor";

type Props = {
  childrens?: IDoctorProgram;
  setData: React.Dispatch<React.SetStateAction<IDoctorProgram>>;
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
        const node = await DoctorProcessServices.updateData({
          id: childrens?.project.id,
          title,
          question
        });

        const data: IDoctorDefaultData = {
          ...node.data
        };

        setData({
          ...childrens,
          project: data
        } as IDoctorProgram);

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
