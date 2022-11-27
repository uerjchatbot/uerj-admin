import React, { useCallback, useEffect, useState } from "react";

import { TextEditor } from "@/components/text-editor";

import { EditTextButton } from "@/components/edit-text-button";
import { toast } from "react-toastify";
import { useModal } from "@/hooks/useModal";
import { ITeachingStaffData } from "@/models/teaching-staff";
import { TeachingStaffServices } from "@/services/student/teaching-staff.service";

type Props = {
  questionId: number;
  text: string;
  setData: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const PageDescription = ({ questionId, text, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [textInfo, setTextInfo] = useState("");

  const renderTextEditor = useCallback(() => {
    if (textInfo.length === 0) return <></>;

    return (
      <>
        <TextEditor value={textInfo} setValue={setTextInfo} />
      </>
    );
  }, [textInfo]);

  const handleEditText = async (): Promise<void> => {
    try {
      const { data } = await TeachingStaffServices.updateHomeTitle(questionId, textInfo);

      setData((oldValue) => {
        return { ...oldValue, ...data };
      });

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  useEffect(() => {
    if (text && text?.length > 0) {
      setTextInfo(text);
    }
  }, [text]);

  return (
    <>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </>
  );
};

export default PageDescription;
