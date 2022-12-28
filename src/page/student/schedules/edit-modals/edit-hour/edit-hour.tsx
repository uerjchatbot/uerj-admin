import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "rsuite";

import { EditTextButton } from "@/components/edit-text-button";
import { useLoading } from "@/hooks/useLoading";
import { SchedulesServices } from "@/services/student/schedules.service";
import { ISchedulesHoursData } from "@/models/students/schedules";
import { useModal } from "@/hooks/useModal";
import * as S from "./styles";

type Props = {
  questionId: number;
  hourData: ISchedulesHoursData;
  setData: React.Dispatch<React.SetStateAction<ISchedulesHoursData[]>>;
};

const EditHour = ({ questionId, hourData, setData }: Props) => {
  const { setLoading } = useLoading();
  const { setIsVisible } = useModal();

  const [group, setGroup] = useState("");
  const [mastermind, setMastermind] = useState("");
  const [dayWeek, setDayWeek] = useState("");
  const [hour, setHour] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);

  const handleCreateHour = async (): Promise<void> => {
    try {
      if (!group || !mastermind || !dayWeek || !hour) {
        toast.error("Preencha todos os campos corretamente!");
        return;
      }

      setLoading(true);

      await SchedulesServices.updateHourData(
        questionId,
        hourData.index,
        group,
        mastermind,
        dayWeek,
        hour
      );

      const { data } = await SchedulesServices.getSchedulesHours(questionId);

      setData(data);

      toast.success("Horário atualizado com sucesso!");

      setIsVisible(false);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);

      toast.error("Houve um erro ao atualizar o horário");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hourData.day_week.length > 0) {
      setDayWeek(hourData.day_week);
    }

    if (hourData.group.length > 0) {
      setGroup(hourData.group);
    }

    if (hourData.hour.length > 0) {
      setHour(hourData.hour);
    }

    if (hourData.mastermind.length > 0) {
      setMastermind(hourData.mastermind);
    }
  }, [hourData]);

  return (
    <div>
      <S.InputsContainer>
        <S.InputColumnContainer>
          <S.Input
            type="text"
            placeholder="Nome"
            defaultValue={group}
            onChange={(e) => setGroup(e.target.value)}
          />

          <S.Input
            type="text"
            placeholder="Orientador"
            defaultValue={mastermind}
            onChange={(e) => setMastermind(e.target.value)}
          />
        </S.InputColumnContainer>

        <S.InputColumnContainer>
          <S.Input
            type="text"
            placeholder="Dia da semana"
            defaultValue={dayWeek}
            onChange={(e) => setDayWeek(e.target.value)}
          />

          <div>
            <p>Horário</p>

            <DatePicker
              format="HH:mm"
              defaultValue={
                new Date().setHours(
                  parseInt(hourData.hour.split(":")[0], 10),
                  parseInt(hourData.hour.split(":")[1], 10)
                ) as unknown as Date
              }
              style={{ width: 120 }}
              onChange={(e) => {
                const hours = e?.getHours();
                const minutes = e?.getMinutes();

                setHour(`${hours}:${minutes}`);
              }}
            />
          </div>
        </S.InputColumnContainer>
      </S.InputsContainer>

      <EditTextButton event={handleCreateHour} />
    </div>
  );
};

export default EditHour;
