import React, { useEffect, useState } from "react";
import { DatePicker } from "rsuite";
import { toast } from "react-toastify";

import * as S from "./styles";

import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { IEventData } from "@/models/events";
import { formatDateToEn_UsFormat, formateStringToDate } from "@/utils/formarter";
import { EventServices } from "@/services/student/events.service";
import { useLoading } from "@/hooks/useLoading";

type Props = {
  id: number;
  data: IEventData;
  setData: React.Dispatch<React.SetStateAction<IEventData>>;
};

const EditSecondStepEvent = ({ id, data, setData }: Props) => {
  const { setLoading } = useLoading();
  const { setIsVisible } = useModal();

  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const handleEditText = async (): Promise<void> => {
    try {
      setLoading(true);

      await EventServices.updateEventBoard(id, hour, date, link, name);

      const { data } = await EventServices.getEventData(id);

      setData(data as IEventData);

      toast.success("Dados atualizados com sucesso!");

      setLoading(false);

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao salvar o texto");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.name.length > 0) setName(data.name);

    if (data.hour.length > 0) setHour(data.hour);

    if (data.date.length > 0) setDate(data.date);

    if (data.link.length > 0) setLink(data.link);
  }, [data]);

  return (
    <div>
      <S.DescriptionContainer>
        <S.EventDataContainer>
          <section>
            <h4>Nome do evento</h4>
            <S.Input defaultValue={name} onChange={(e) => setName(e.currentTarget.value)} />
          </section>

          <section>
            <h4>Horário</h4>
            <DatePicker
              format="HH:mm"
              defaultValue={
                new Date().setHours(
                  parseInt(data.hour.split(":")[0], 10),
                  parseInt(data.hour.split(":")[1], 10)
                ) as unknown as Date
              }
              style={{ width: "100%" }}
              onChange={(e) => {
                const hours = e?.getHours();
                const minutes = e?.getMinutes();

                setHour(`${hours}:${minutes}`);
              }}
            />
          </section>

          <section>
            <h4>Data</h4>
            <DatePicker
              oneTap
              format="dd/MM/yyyy"
              defaultValue={formateStringToDate(data.date)}
              style={{
                width: "100%"
              }}
              onChange={(e) => setDate(formatDateToEn_UsFormat(e || new Date()))}
            />
          </section>
        </S.EventDataContainer>

        <S.EventLinkContainer>
          <section>
            <h4>Link</h4>
            <S.Input defaultValue={link} onChange={(e) => setLink(e.currentTarget.value)} />
          </section>
        </S.EventLinkContainer>
      </S.DescriptionContainer>

      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditSecondStepEvent;
