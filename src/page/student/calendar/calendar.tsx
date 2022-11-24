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

//? Edit Modals
import { EditFirstQuestion } from "./questions/edit-first-question";
import { EditSecondQuestion } from "./questions/edit-second-question";
import { EditThirdQuestion } from "./questions/edit-third-question";
import { EditFourthQuestion } from "./questions/edit-fourth-question";

const Calendar = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();
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

  //? Get data from routes
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

  //? Edit Text's modals
  const handleOpenEditTitleModal = (questionId: number): void => {
    setTitle(titleData.question);

    setComponent(
      <EditCalendarTitle data={titleData.title} setData={setTitleData} questionId={questionId} />
    );

    setIsVisible(true);
  };

  const handleOpenEditFirstQuestionModal = (): void => {
    setTitle(firstQuestionData.question);

    setComponent(
      <EditFirstQuestion
        question={firstQuestionData.question}
        setQuestion={setFirstQuestionData}
        title={firstQuestionData.title.split("|")[0]}
        initial_date={firstQuestionData.title.split("|")[1]}
        final_date={firstQuestionData.title.split("|")[3]}
        questionId={firstQuestionData.id}
      />
    );

    setIsVisible(true);
  };

  const handleOpenEditSecondQuestionModal = (): void => {
    setTitle(secondQuestionData.question);

    setComponent(
      <EditSecondQuestion
        question={secondQuestionData.question}
        setQuestion={setSecondQuestionData}
        title={secondQuestionData.title.split("|")[0]}
        initial_date={secondQuestionData.title.split("|")[1]}
        final_date={secondQuestionData.title.split("|")[3]}
        questionId={secondQuestionData.id}
      />
    );

    setIsVisible(true);
  };

  const handleOpenEditThirdQuestionModal = (): void => {
    setTitle(secondQuestionData.question);

    setComponent(
      <EditThirdQuestion
        question={thirdQuestionData.question}
        setQuestion={setThirdQuestionData}
        title={thirdQuestionData.title.split("|")[0]}
        initial_date={thirdQuestionData.title.split("|")[1]}
        final_date={thirdQuestionData.title.split("|")[3]}
        childrenId={thirdQuestionData.childrens[0].id}
        childrenTitle={thirdQuestionData.childrens[0].title}
        questionId={thirdQuestionData.id}
      />
    );

    setIsVisible(true);
  };

  const handleOpenEditFourthQuestionModal = (): void => {
    setTitle(fourthQuestionData.question);

    setComponent(
      <EditFourthQuestion
        question={fourthQuestionData.question}
        setQuestion={setFourthQuestionData}
        title={fourthQuestionData.title}
        questionId={fourthQuestionData.id}
      />
    );

    setIsVisible(true);
  };

  //? Render components functions
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
            <span>{firstQuestionData.title.split("|")[1]}</span>
          </DatePickerContainer>

          <p>{firstQuestionData.title.split("|")[2]}</p>

          <DatePickerContainer>
            <span>{firstQuestionData.title.split("|")[3]}</span>
          </DatePickerContainer>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditFirstQuestionModal}>
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
            <span>{secondQuestionData.title.split("|")[1]}</span>
          </DatePickerContainer>

          <p>{secondQuestionData.title.split("|")[2]}</p>

          <DatePickerContainer>
            <span>{secondQuestionData.title.split("|")[3]}</span>
          </DatePickerContainer>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditSecondQuestionModal}>
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
            <span>{thirdQuestionData.title.split("|")[1]}</span>
          </DatePickerContainer>

          <p>{thirdQuestionData.title.split("|")[2]}</p>

          <DatePickerContainer>
            <span>{thirdQuestionData.title.split("|")[3]}</span>
          </DatePickerContainer>
        </div>
        <ul>
          {thirdQuestionData.childrens.map((children: IChildrenData, index) => (
            <li key={index}>{children.title}</li>
          ))}
        </ul>

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditThirdQuestionModal}>
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
          <p>{fourthQuestionData.title}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditFourthQuestionModal}>
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
