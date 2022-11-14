/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { toast } from "react-toastify";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  ContentCardHeader,
  DatePickerContainer,
  DescriptionContainer,
  DotRounded
} from "./styles";
import { ICalendarChildrenData, ICalendarTitleData, IChildrenData } from "@/models/student";
import { CalendarServices } from "@/services/student/calendar.service";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { EditCalendarTitle } from "./edit-calendar-title";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { orderChildrens } from "@/utils/order";

const Calendar = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state } = useLocation();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [titleData, setTitleData] = useState<ICalendarTitleData>({} as ICalendarTitleData);

  const [firstQuestionData, setFirstQuestionData] = useState<ICalendarChildrenData>(
    {} as ICalendarChildrenData
  );
  const [secondQuestionData, setSecondQuestionData] = useState<ICalendarChildrenData>(
    {} as ICalendarChildrenData
  );
  const [thirdQuestionData, setThirdQuestionData] = useState<ICalendarChildrenData>(
    {} as ICalendarChildrenData
  );
  const [fourthQuestionData, setFourthQuestionData] = useState<ICalendarChildrenData>(
    {} as ICalendarChildrenData
  );

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  //! Get data from routes
  const getChildrensData = useCallback(async () => {
    setLoading(true);

    if (titleData.childrens) {
      try {
        titleData.childrens.forEach(async (children, index) => {
          setLoading(true);

          const { data } = await CalendarServices.getCalendarChildrenData(children.id);

          switch (index) {
            case 0:
              setFirstQuestionData(data);
              break;
            case 1:
              setSecondQuestionData(data);
              break;
            case 2:
              setThirdQuestionData(data);
              break;
            case 3:
              setFourthQuestionData(data);
              break;
          }
        });
      } catch (error) {
        setLoading(false);
      }
    }

    setLoading(false);
  }, [titleData]);

  const getTitleData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await CalendarServices.getTitle(state.childrenId);

      data.childrens = orderChildrens(data.childrens);

      setTitleData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, []);

  //! Edit Text's modals
  const handleOpenEditTitleModal = (questionId: number): void => {
    setTitle(titleData.question);

    setComponent(
      <EditCalendarTitle data={titleData.title} setData={setTitleData} questionId={questionId} />
    );

    setIsVisible(true);
  };

  //! Render components functions
  const renderFirstQuestion = useCallback(() => {
    if (!firstQuestionData.question || !firstQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>1</DotRounded>
          <span>{firstQuestionData.question}</span>
        </ContentCardHeader>

        <div>
          <p>{firstQuestionData.title.split("|")[0]}</p>
          <DatePickerContainer>
            <p>Data início:</p>
            <span>{firstQuestionData.title.split("|")[1]}</span>
          </DatePickerContainer>

          <DatePickerContainer>
            <p>Data final:</p>
            <span>{firstQuestionData.title.split("|")[3]}</span>
          </DatePickerContainer>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => console.log("editar o período letivo")}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [firstQuestionData]);

  const renderSecondQuestion = useCallback(() => {
    if (!secondQuestionData.question || !secondQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>2</DotRounded>
          <span>{secondQuestionData.question}</span>
        </ContentCardHeader>

        <div>
          <p>{secondQuestionData.title.split("|")[0]}</p>
          <DatePickerContainer>
            <p>Data início:</p>
            <span>{secondQuestionData.title.split("|")[1]}</span>
          </DatePickerContainer>

          <DatePickerContainer>
            <p>Data final:</p>
            <span>{secondQuestionData.title.split("|")[3]}</span>
          </DatePickerContainer>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => console.log("editar o período letivo")}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [secondQuestionData]);

  const renderThirdQuestion = useCallback(() => {
    if (!thirdQuestionData.question || !thirdQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>3</DotRounded>
          <span>{thirdQuestionData.question}</span>
        </ContentCardHeader>

        <div>
          <p>{thirdQuestionData.title.split("|")[0]}</p>
          <DatePickerContainer>
            <p>Data início:</p>
            <span>{thirdQuestionData.title.split("|")[1]}</span>
          </DatePickerContainer>

          <DatePickerContainer>
            <p>Data final:</p>
            <span>{thirdQuestionData.title.split("|")[3]}</span>
          </DatePickerContainer>
        </div>
        <ul>
          {thirdQuestionData.childrens.map((children: IChildrenData, index) => (
            <li key={index}>{children.title}</li>
          ))}
        </ul>

        <Button outline={true} type={"button"}>
          <span onClick={() => console.log("editar o período letivo")}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [thirdQuestionData]);

  const renderFourthQuestion = useCallback(() => {
    if (!fourthQuestionData.question || !fourthQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>4</DotRounded>
          <span>{fourthQuestionData.question}</span>
        </ContentCardHeader>

        <div>
          <p>{fourthQuestionData.title.split("|")[0]}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => console.log("editar o período letivo")}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [fourthQuestionData]);

  useEffect(() => {
    getTitleData();
  }, []);

  useEffect(() => {
    getChildrensData();
  }, [getChildrensData]);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} type={"button"}>
          <span onClick={handleNavigateBack}>Voltar</span>
        </Button>
      </ContainerButton>

      <>
        <DescriptionContainer>
          <p>{titleData.title}</p>

          <div>
            <Button outline={true} type={"button"}>
              <span onClick={() => handleOpenEditTitleModal(state.childrenId)}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </div>
        </DescriptionContainer>

        <ContainerCards>
          {renderFirstQuestion()}

          {renderSecondQuestion()}

          {renderThirdQuestion()}

          {renderFourthQuestion()}
        </ContainerCards>
      </>
    </Container>
  );
};

export default Calendar;
