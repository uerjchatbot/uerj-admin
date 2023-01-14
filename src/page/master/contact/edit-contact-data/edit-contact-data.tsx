import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { DotRounded } from "../styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { IMasterDefaultData } from "@/models/master";
import { ContactServices } from "@/services/master/contact.service";
import { Container, QuestionContainer } from "./styles";

type Props = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<IMasterDefaultData>>;
  title?: string;
  questionId: number;
};

const EditFirstQuestion = ({ question, setQuestion, title, questionId }: Props) => {
  const [text, setText] = useState("");
  const [textInfo, setTextInfo] = useState("");

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return (
      <>
        <QuestionContainer>
          <DotRounded>1</DotRounded>
          <TextEditor value={text} setValue={setText} />
        </QuestionContainer>

        <TextEditor value={textInfo} setValue={setTextInfo} />
      </>
    );
  }, [text]);

  const handleUpdate = async () => {
    try {
      const { data } = await ContactServices.update(questionId, {
        question: text,
        title: textInfo
      });

      setQuestion((oldValue) => {
        return { ...oldValue, ...data };
      });

      setIsVisible(false);

      toast.success("Título e datas alteradas com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  useEffect(() => {
    if (question && question?.length > 0) {
      setText(question);
    }
  }, [question]);

  useEffect(() => {
    if (title && title?.length > 0) {
      setTextInfo(title);
    }
  }, [title]);

  return (
    <Container>
      {renderTextEditor()}

      <EditTextButton event={handleUpdate} />
    </Container>
  );
};

export default EditFirstQuestion;
