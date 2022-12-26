import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "rsuite";

import * as S from "./styles";

import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { IFirstStepEventData } from "@/models/events";
import { formatDateToEn_UsFormat, formateStringToDate } from "@/utils/formarter";
import { EventServices } from "@/services/student/events.service";

type Props = {
  questionId: number;
  hour: string;
  date: string;
  setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>;
};

const EditFirstStepEvent = ({ questionId, hour, date, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [eventHour, setEventHour] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleEditText = async (): Promise<void> => {
    try {
      await EventServices.updateEventHourAndDate(questionId, eventHour, eventDate);

      const { data } = await EventServices.getEventDateAndHour(questionId);

      setData((oldValue) => {
        return { ...oldValue, ...data };
      });

      setIsVisible(false);

      toast.success("Textos alterados com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao salvar o texto");
    }
  };

  useEffect(() => {
    if (date.length > 0) {
      setEventDate(date);
    }
  }, [date]);

  return (
    <>
      <S.QuestionContainer>
        <div>
          <S.EventTitle>
            <strong>1 - </strong>
            Horário
          </S.EventTitle>
          <S.EventData>
            <DatePicker
              format="HH:mm"
              defaultValue={
                new Date().setHours(
                  parseInt(hour.split(":")[0], 10),
                  parseInt(hour.split(":")[1], 10)
                ) as unknown as Date
              }
              style={{ width: 150 }}
              onChange={(e) => {
                const hours = e?.getHours();
                const minutes = e?.getMinutes();

                setEventHour(`${hours}:${minutes}`);
              }}
            />
          </S.EventData>
        </div>

        <div>
          <S.EventTitle>
            <strong>2 - </strong>
            Data
          </S.EventTitle>

          <S.EventData>
            <DatePicker
              oneTap
              format="dd/MM/yyyy"
              defaultValue={formateStringToDate(date)}
              style={{ width: 150 }}
              onChange={(e) => setEventDate(formatDateToEn_UsFormat(e || new Date()))}
            />
          </S.EventData>
        </div>
      </S.QuestionContainer>

      <EditTextButton event={handleEditText} />
    </>
  );
};

export default EditFirstStepEvent;
