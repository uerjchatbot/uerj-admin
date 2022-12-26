import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import * as S from "./styles";
import { formatStringDateToPtBr } from "@/utils/formarter";
import { useModal } from "@/hooks/useModal";
import { IEventChildrenData, IEventData } from "@/models/events";
import { EventServices } from "@/services/student/events.service";
import { EditSecondStepEvent } from "../../edit_modals/second_step_event";

type Props = {
  thirdEvent?: IEventChildrenData;
  fourthEvent?: IEventChildrenData;
  fifthEvent?: IEventChildrenData;
};

const Form = ({ thirdEvent, fourthEvent, fifthEvent }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [thirdEventData, setThirdEventData] = useState<IEventData>({} as IEventData);
  const [fourthEventData, setFourthEventData] = useState<IEventData>({} as IEventData);
  const [fifthEventData, setFifthEventData] = useState<IEventData>({} as IEventData);

  const getEventData = async (
    id: number,
    setData: React.Dispatch<React.SetStateAction<IEventData>>
  ) => {
    try {
      const { data } = await EventServices.getEventData(id);

      setData(data as IEventData);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados do evento");
    }
  };

  const handleOpenEditEventModal = async (
    id = 0,
    data: IEventData,
    setData: React.Dispatch<React.SetStateAction<IEventData>>
  ) => {
    setTitle(`Editar ${data.name}`);

    setComponent(<EditSecondStepEvent id={id} data={data} setData={setData} />);

    setIsVisible(true);
  };

  useEffect(() => {
    if (thirdEvent?.childrens) {
      getEventData(thirdEvent.childrens[0].id, setThirdEventData);
    }
  }, [thirdEvent]);

  useEffect(() => {
    if (fourthEvent?.childrens) {
      getEventData(fourthEvent.childrens[0].id, setFourthEventData);
    }
  }, [fourthEvent]);

  useEffect(() => {
    if (fifthEvent?.childrens) {
      getEventData(fifthEvent.childrens[0].id, setFifthEventData);
    }
  }, [fifthEvent]);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>3</S.DotRounded>
          <span>{thirdEvent?.question}</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <S.EventDataContainer>
            <section>
              <h4>Nome do evento</h4>
              <p>{thirdEventData.name}</p>
            </section>

            <section>
              <h4>Horário</h4>
              <p>{thirdEventData.hour}</p>
            </section>

            <section>
              <h4>Data</h4>
              <p>{formatStringDateToPtBr(thirdEventData.date)}</p>
            </section>
          </S.EventDataContainer>

          <S.EventLinkContainer>
            <section>
              <h4>Link</h4>
              <p>{thirdEventData.link}</p>
            </section>
          </S.EventLinkContainer>

          <S.EditButtonContainer>
            <Button outline={true} type={"button"}>
              <span
                onClick={() =>
                  handleOpenEditEventModal(
                    thirdEvent?.childrens[0].id,
                    thirdEventData,
                    setThirdEventData
                  )
                }>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.EditButtonContainer>
        </S.DescriptionContainer>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>4</S.DotRounded>
          <span>{fourthEvent?.question}</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <S.EventDataContainer>
            <section>
              <h4>Nome do evento</h4>
              <p>{fourthEventData.name}</p>
            </section>

            <section>
              <h4>Horário</h4>
              <p>{fourthEventData.hour}</p>
            </section>

            <section>
              <h4>Data</h4>
              <p>{formatStringDateToPtBr(fourthEventData.date)}</p>
            </section>
          </S.EventDataContainer>

          <S.EventLinkContainer>
            <section>
              <h4>Link</h4>
              <p>{fourthEventData.link}</p>
            </section>
          </S.EventLinkContainer>

          <S.EditButtonContainer>
            <Button outline={true} type={"button"}>
              <span
                onClick={() =>
                  handleOpenEditEventModal(
                    fourthEvent?.childrens[0].id,
                    fourthEventData,
                    setFourthEventData
                  )
                }>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.EditButtonContainer>
        </S.DescriptionContainer>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>5</S.DotRounded>
          <span>{fifthEvent?.question}</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <S.EventDataContainer>
            <section>
              <h4>Nome do evento</h4>
              <p>{fifthEventData.name}</p>
            </section>

            <section>
              <h4>Horário</h4>
              <p>{fifthEventData.hour}</p>
            </section>

            <section>
              <h4>Data</h4>
              <p>{formatStringDateToPtBr(fifthEventData.date)}</p>
            </section>
          </S.EventDataContainer>

          <S.EventLinkContainer>
            <section>
              <h4>Link</h4>
              <p>{fifthEventData.link}</p>
            </section>
          </S.EventLinkContainer>

          <S.EditButtonContainer>
            <Button outline={true} type={"button"}>
              <span
                onClick={() =>
                  handleOpenEditEventModal(
                    fifthEvent?.childrens[0].id,
                    fifthEventData,
                    setFifthEventData
                  )
                }>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.EditButtonContainer>
        </S.DescriptionContainer>
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
