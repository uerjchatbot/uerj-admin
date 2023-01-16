import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { DoctorProcessServices } from "@/services/doctor/process.service";
import { DotRounded } from "../../styles";
import { IDoctorDefaultData } from "@/models/doctor";

type Props = {
  enrollment?: IDoctorDefaultData;
  setEnrollment: React.Dispatch<React.SetStateAction<IDoctorDefaultData>>;
};

const EditEnrollmentQuestion = ({ enrollment, setEnrollment }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(enrollment?.question || "");
  const [title, setTitle] = useState<string>(enrollment?.title || "");

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>8</DotRounded>

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
          id: enrollment?.id,
          title,
          question
        });

        const data: IDoctorDefaultData = {
          ...node.data
        };

        setEnrollment(data);
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

export default EditEnrollmentQuestion;
