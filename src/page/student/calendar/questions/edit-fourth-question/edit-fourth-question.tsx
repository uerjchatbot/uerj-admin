import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { DotRounded } from "../../styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { ICalendarChildrenData } from "@/models/student";
import { CalendarServices } from "@/services/student/calendar.service";
import { Container, QuestionContainer } from "./style";

type Props = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<ICalendarChildrenData>>;
  title?: string;
  questionId: number;
};

const EditFourthQuestion = ({ question, setQuestion, title, questionId }: Props) => {
  const [text, setText] = useState("");
  const [textInfo, setTextInfo] = useState("");

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return (
      <>
        <QuestionContainer>
          <DotRounded>4</DotRounded>
          <TextEditor value={text} setValue={setText} />
        </QuestionContainer>

        <TextEditor value={textInfo} setValue={setTextInfo} />
      </>
    );
  }, [text]);

  const handleEditDates = async () => {
    try {
      const { data } = await CalendarServices.updateFourthQuestion(questionId, text, textInfo);

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

      <EditTextButton event={handleEditDates} />
    </Container>
  );
};

export default EditFourthQuestion;
