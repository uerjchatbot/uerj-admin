import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { EditTextButton } from "@/components/edit-text-button";
import { ITeachingStaffData } from "@/models/teaching-staff";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { DotRounded } from "../../styles";
import * as S from "./styles";

type Props = {
  questionId?: number;
  text?: string;
  description?: string;
  setTeachers: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const EditThirdQuestion = ({ questionId, text, description, setTeachers }: Props) => {
  const { setIsVisible } = useModal();

  const [textInfo, setTextInfo] = useState("");
  const [textDescription, setTextDescription] = useState("");

  const renderTextEditor = useCallback(() => {
    if (textInfo.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>1</DotRounded>
          <TextEditor value={textInfo} setValue={setTextInfo} />
        </S.QuestionContainer>

        <S.Input
          rows={8}
          defaultValue={textDescription}
          onChange={(e) => setTextDescription(e.target.value)}
        />
      </>
    );
  }, [textInfo, textDescription]);

  const handleEditText = async () => {
    try {
      const { data } = await TeachingStaffServices.updateFfpQuestionAndTitle(
        questionId || 0,
        textDescription,
        textInfo
      );

      setTeachers((oldValue) => {
        return { ...oldValue, ...data };
      });

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao editar os textos, tente novamente mais tarde");
    }
  };

  useEffect(() => {
    if (text && text.length > 0) setTextInfo(text);
  }, [text]);

  useEffect(() => {
    if (description && description.length > 0) setTextDescription(description);
  }, [description]);

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditThirdQuestion;
