import React, { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditPageDescription } from "../../edit_modals/page_description";
import { IEventChildrenData, IEventsHomeData, IFirstStepEventData } from "@/models/events";
import { formatIndexToLetter, formatStringDateToPtBr } from "@/utils/formarter";
import { AiOutlinePlus } from "react-icons/ai";
import { EditFirstStepEvent } from "../../edit_modals/first_step_event";
import { EventServices } from "@/services/student/events.service";
import { CreateBanking } from "../../edit_modals/create_banking";

type Props = {
  title?: string;
  questionId?: number;
  firstEvent?: IEventChildrenData;
  secondEvent?: IEventChildrenData;
  setHomeData: React.Dispatch<React.SetStateAction<IEventsHomeData>>;
};

const Form = ({ title, questionId, firstEvent, secondEvent, setHomeData }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [firstEventData, setFirstEventData] = useState<IFirstStepEventData>(
    {} as IFirstStepEventData
  );
  const [secondEventData, setSecondEventData] = useState<IFirstStepEventData>(
    {} as IFirstStepEventData
  );

  const getEventData = async (
    id: number,
    boardId: number,
    setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>
  ) => {
    try {
      const response1 = await EventServices.getEventData(id);

      const response2 = await EventServices.getEventBoardData(boardId);

      const formatedData = {
        hour: response1.data.hour,
        date: response1.data.date,
        teachers: response2.data.teachers
      };

      setData(formatedData);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados do evento");
    }
  };

  const handleDeleteTeacher = async (
    teacherId: number,
    id: number,
    setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>
  ) => {
    try {
      await EventServices.deleteTeacher(teacherId, id);

      const { data } = await EventServices.getEventBoardData(id);

      setData((oldValue) => {
        return { ...oldValue, ...data };
      });
    } catch (error) {
      toast.error("Houve um erro ao deletar o(a) professor(a)");
    }
  };

  const handleOpenEditPageDescription = () => {
    setTitle("Editar Eventos");

    setComponent(
      <EditPageDescription questionId={questionId || 0} text={title || ""} setData={setHomeData} />
    );

    setIsVisible(true);
  };

  const handleOpenAddBanking = (
    id = 0,
    setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>
  ) => {
    setTitle("Adicionar Banca");

    setComponent(<CreateBanking questionId={id} setData={setData} />);

    setIsVisible(true);
  };

  const handleOpenEditEventInfo = (questionId = 0, hour: string, date: string, setData: any) => {
    setTitle(`Editar ${firstEvent?.question}`);

    setComponent(
      <EditFirstStepEvent questionId={questionId} hour={hour} date={date} setData={setData} />
    );

    setIsVisible(true);
  };

  useEffect(() => {
    if (firstEvent?.childrens) {
      getEventData(firstEvent.childrens[0].id, firstEvent.childrens[1].id, setFirstEventData);
    }
  }, [firstEvent]);

  useEffect(() => {
    if (secondEvent?.childrens) {
      getEventData(secondEvent.childrens[0].id, secondEvent.childrens[1].id, setSecondEventData);
    }
  }, [secondEvent]);

  return (
    <>
      <S.DescriptionContainer>
        {title && <div>{title}</div>}
        {/* {title && <div dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br />") }} />} */}

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleOpenEditPageDescription}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </S.ContainerButton>
      </S.DescriptionContainer>

      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            {firstEvent && <span>{firstEvent.question}</span>}
          </S.ContentCardHeader>

          {firstEvent?.childrens && (
            <>
              <S.HourAndDateContainer>
                <div>
                  <S.EventTitle>
                    <strong>1 - </strong>
                    Horário
                  </S.EventTitle>
                  <S.EventData>{firstEventData.hour}</S.EventData>
                </div>

                <div>
                  <S.EventTitle>
                    <strong>2 - </strong>
                    Data
                  </S.EventTitle>
                  <S.EventData>{formatStringDateToPtBr(firstEventData?.date)}</S.EventData>
                </div>

                <S.AddBankingButton
                  onClick={() =>
                    handleOpenAddBanking(firstEvent?.childrens[1].id, setFirstEventData)
                  }>
                  Adicionar banca <AiOutlinePlus size={20} />
                </S.AddBankingButton>
              </S.HourAndDateContainer>

              <S.EventTitle>
                <strong>3 - </strong>
                Banca
              </S.EventTitle>

              <S.BankingTeachersContainer>
                {firstEventData?.teachers?.map((teacher, index) => {
                  return (
                    <S.BankingTeachers key={`teacher-${teacher}-${teacher.index}`}>
                      <div>
                        <S.EventTitle>
                          <strong>{formatIndexToLetter(index)} - </strong> Professor(a)
                        </S.EventTitle>
                        <S.EventData className="banking-data">{teacher.teacher}</S.EventData>
                      </div>

                      <button
                        onClick={() =>
                          handleDeleteTeacher(
                            teacher.index,
                            firstEvent?.childrens[1].id,
                            setFirstEventData
                          )
                        }>
                        <BsTrash size={20} />
                      </button>
                    </S.BankingTeachers>
                  );
                })}
              </S.BankingTeachersContainer>
            </>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span
                onClick={() =>
                  handleOpenEditEventInfo(
                    firstEvent?.childrens[0].id,
                    firstEventData.hour,
                    firstEventData.date,
                    setFirstEventData
                  )
                }>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>2</S.DotRounded>
            {secondEvent && <span>{secondEvent.question}</span>}
          </S.ContentCardHeader>

          {secondEvent?.childrens && (
            <>
              <S.HourAndDateContainer>
                <div>
                  <S.EventTitle>
                    <strong>1 - </strong>
                    Horário
                  </S.EventTitle>
                  <S.EventData>{secondEventData.hour}</S.EventData>
                </div>

                <div>
                  <S.EventTitle>
                    <strong>2 - </strong>
                    Data
                  </S.EventTitle>
                  <S.EventData>{formatStringDateToPtBr(secondEventData.date)}</S.EventData>
                </div>

                <S.AddBankingButton
                  onClick={() =>
                    handleOpenAddBanking(secondEvent?.childrens[1].id, setSecondEventData)
                  }>
                  Adicionar banca <AiOutlinePlus size={20} />
                </S.AddBankingButton>
              </S.HourAndDateContainer>

              <S.EventTitle>
                <strong>3 - </strong>
                Banca
              </S.EventTitle>

              <S.BankingTeachersContainer>
                {secondEventData?.teachers?.map((teacher, index) => {
                  return (
                    <S.BankingTeachers key={`teacher-${teacher}-${teacher.index}`}>
                      <div>
                        <S.EventTitle>
                          <strong>{formatIndexToLetter(index)} - </strong> Professor(a)
                        </S.EventTitle>
                        <S.EventData className="banking-data">{teacher.teacher}</S.EventData>
                      </div>

                      <button
                        onClick={() =>
                          handleDeleteTeacher(
                            teacher.index,
                            secondEvent?.childrens[1].id,
                            setSecondEventData
                          )
                        }>
                        <BsTrash size={20} />
                      </button>
                    </S.BankingTeachers>
                  );
                })}
              </S.BankingTeachersContainer>
            </>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span
                onClick={() =>
                  handleOpenEditEventInfo(
                    secondEvent?.childrens[0].id,
                    secondEventData.hour,
                    secondEventData.date,
                    setSecondEventData
                  )
                }>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
