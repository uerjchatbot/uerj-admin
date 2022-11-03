import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/button";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// import { Markup } from "interweave";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  DescriptionContainer,
  DotRounded,
  Title
} from "./styles";

import { STUDENT_CALENDAR_PATH, STUDENT_FACULTY_AND_STUDENDS } from "@/routes/paths/paths.private";
import { StudentServices } from "@/services/student/home.service";
import { IStudentHomeData } from "@/models/student";
import { useModal } from "@/hooks/useModal";
import EditHomeTitle from "./edit-home-title/edit-home-title";

function filterTitle(title: string) {
  return title.replaceAll("\n", "<br />").replaceAll("\b", "");
}

const Home: React.FC = () => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [data, setData] = useState<IStudentHomeData>();

  const getData = useCallback(async () => {
    try {
      const { data } = await StudentServices.getHomeData();

      setData(data);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const navigateToCalendarView = () => navigate(STUDENT_CALENDAR_PATH());
  const navigateToFacultyAndStudents = () => navigate(STUDENT_FACULTY_AND_STUDENDS());
  const handleBackNavigation = () => navigate(-1);

  // console.log("data:", data);

  const handleEditTitle = async (): Promise<void> => {
    setTitle("texto de boas vindas");
    setComponent(<EditHomeTitle data={data?.title} />);
    setIsVisible(true);

    await getData();
  };

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} onClick={handleBackNavigation} type={"button"}>
          <span>Voltar</span>
        </Button>
      </ContainerButton>

      <DescriptionContainer>
        {data?.title && <Title dangerouslySetInnerHTML={{ __html: filterTitle(data.title) }} />}

        <ContainerButton>
          <Button outline={true} type={"button"} onClick={handleEditTitle}>
            <span>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </ContainerButton>
      </DescriptionContainer>

      <ContainerCards>
        <ContentCard
          onClick={() => {
            navigateToCalendarView();
          }}>
          <DotRounded>1</DotRounded>
          <span>
            Calendário <br /> letivo
          </span>
        </ContentCard>

        <ContentCard
          onClick={() => {
            navigateToFacultyAndStudents();
          }}>
          <DotRounded>2</DotRounded>
          <span>
            Corpo
            <br />
            docente
          </span>
        </ContentCard>

        <ContentCard>
          <DotRounded>3</DotRounded>
          <span>Disciplinas</span>
        </ContentCard>

        <ContentCard>
          <DotRounded>4</DotRounded>
          <span>Eventos</span>
        </ContentCard>

        <ContentCard>
          <DotRounded>5</DotRounded>
          <span>Horários</span>
        </ContentCard>

        <ContentCard>
          <DotRounded>6</DotRounded>
          <span>
            Processo
            <br />
            seletivo
            <br />
            de bolsas
          </span>
        </ContentCard>

        <ContentCard>
          <DotRounded>7</DotRounded>
          <span>
            Instruções
            <br />e tutoriais
          </span>
        </ContentCard>
      </ContainerCards>
    </Container>
  );
};

export default Home;
