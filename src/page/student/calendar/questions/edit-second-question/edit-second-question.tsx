import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "rsuite";

import { DotRounded } from "../../styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { ICalendarChildrenData } from "@/models/student";
import { CalendarServices } from "@/services/student/calendar.service";
import { formateDatePickerObject, formateStringToDate } from "@/utils/formarter";
import { Container, QuestionContainer, DatesContainer } from "./style";

type Props = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<ICalendarChildrenData>>;
  title?: string;
  initial_date: string;
  final_date: string;
  questionId: number;
};

const EditSecondQuestion = ({
  question,
  setQuestion,
  title,
  initial_date,
  final_date,
  questionId
}: Props) => {
  const [text, setText] = useState("");
  const [textInfo, setTextInfo] = useState("");
  const [initialDate, setInitialDate] = useState(initial_date);
  const [finalDate, setFinalDate] = useState(final_date);

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return (
      <>
        <QuestionContainer>
          <DotRounded>2</DotRounded>
          <TextEditor value={text} setValue={setText} />
        </QuestionContainer>

        <TextEditor value={textInfo} setValue={setTextInfo} />
      </>
    );
  }, [text]);

  const handleEditDates = async () => {
    try {
      await CalendarServices.updateSecondQuestion(questionId, text);

      const { data } = await CalendarServices.updateQuestionDate(
        questionId,
        textInfo,
        initialDate,
        finalDate
      );

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

  useEffect(() => {
    setInitialDate(initial_date);
  }, [initial_date]);

  useEffect(() => {
    setFinalDate(final_date);
  }, [final_date]);

  return (
    <Container>
      {renderTextEditor()}

      <DatesContainer>
        <div>
          <p>Data inicial</p>
          <DatePicker
            format="dd/MM/yyyy"
            defaultValue={initialDate ? formateStringToDate(initialDate) : new Date()}
            onChange={(date: Date | null) => {
              if (date) {
                setInitialDate(formateDatePickerObject(date));
              }
            }}
          />
        </div>
        <div>
          <p>data final</p>
          <DatePicker
            format="dd/MM/yyyy"
            defaultValue={finalDate ? formateStringToDate(finalDate) : new Date()}
            onChange={(date: Date | null) => {
              if (date) {
                setFinalDate(formateDatePickerObject(date));
              }
            }}
          />
        </div>
      </DatesContainer>

      <EditTextButton event={handleEditDates} />
    </Container>
  );
};

export default EditSecondQuestion;
