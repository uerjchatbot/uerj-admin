import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/button";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  DescriptionContainer,
  DotRounded
} from "./styles";

import { STUDENT_CALENDAR_PATH, STUDENT_FACULTY_AND_STUDENDS } from "@/routes/paths/paths.private";
import { StudentServices } from "@/services/student/home.service";

const Home: React.FC = () => {
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    const { data } = await StudentServices.getHomeData();

    console.log("data:", data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const navigateToCalendarView = () => navigate(STUDENT_CALENDAR_PATH());
  const navigateToFacultyAndStudents = () => navigate(STUDENT_FACULTY_AND_STUDENDS());
  const handleBackNavigation = () => navigate(-1);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} onClick={handleBackNavigation} type={"button"}>
          <span>Voltar</span>
        </Button>
      </ContainerButton>

      <DescriptionContainer>
        <p> Olá Aluno PPGEdu,</p>
        <p>
          Seja bem-vindo ao nosso sistema de comunicação offline, seu auxiliar estudantil na
          pós-graduação. <br />
          Estamos à disposição sempre que precisar.
        </p>
        <p>Escolha entre as opções abaixo:</p>

        <ContainerButton>
          <Button outline={true} type={"button"}>
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
