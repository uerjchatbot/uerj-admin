import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { useModal } from "@/hooks/useModal";
import { IEditModalData } from "@/models/students/selective_process";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { EditTextButton } from "@/components/edit-text-button";
import { TutorialServices } from "@/services/student/tutorial.service";

type Props = {
  data: IEditModalData;
};

const EditTitle = ({ data }: Props) => {
  const { setLoading } = useLoading();

  const [textInfo, setTextInfo] = useState("");

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (!textInfo) return <></>;

    return <>{textInfo && <TextEditor value={textInfo} setValue={setTextInfo} />}</>;
  }, [textInfo]);

  const handleEditData = async () => {
    try {
      setLoading(true);

      await TutorialServices.updateDataChildren(data.questionId, textInfo);

      const response = await TutorialServices.getHomeData(data.id);

      data.setData(response.data);

      setIsVisible(false);

      toast.success("Tutorial atualizado com sucesso");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar o tutorial");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.title && data.title?.length > 0) {
      setTextInfo(data.title);
    }
  }, [data]);

  // console.log("id:", data.questionId);

  return (
    <Container>
      {renderTextEditor()}

      <EditTextButton event={handleEditData} />
    </Container>
  );
};

export default EditTitle;
