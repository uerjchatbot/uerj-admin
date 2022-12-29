import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { DotRounded } from "../../styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Container, QuestionContainer } from "./style";
import { IEditModalData } from "@/models/students/selective_process";
import { SelectiveProcessServices } from "@/services/student/selective-process.service";
import { useLoading } from "@/hooks/useLoading";

type Props = {
  data: IEditModalData;
};

const EditQuestion = ({ data }: Props) => {
  const { setLoading } = useLoading();

  const [text, setText] = useState("");
  const [textInfo, setTextInfo] = useState("");

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (!text && !textInfo) return <></>;

    return (
      <>
        <QuestionContainer>
          {data.index && <DotRounded>{data?.index}</DotRounded>}
          {text && <TextEditor value={text} setValue={setText} />}
        </QuestionContainer>

        {textInfo && <TextEditor value={textInfo} setValue={setTextInfo} />}
      </>
    );
  }, [text, textInfo]);

  const handleEditDates = async () => {
    try {
      setLoading(true);

      await SelectiveProcessServices.updateQuestion(data.questionId, text, textInfo);

      const response = await SelectiveProcessServices.getHomeData(data.id);

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
    if (data.question && data.question?.length > 0) {
      setText(data.question);
    }

    if (data.title && data.title?.length > 0) {
      setTextInfo(data.title);
    }
  }, [data]);

  return (
    <Container>
      {renderTextEditor()}

      <EditTextButton event={handleEditDates} />
    </Container>
  );
};

export default EditQuestion;
