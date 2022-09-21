import React from "react";

import { BsPencil } from "react-icons/bs";
import { GraduateCapIcon, MedalIcon, RepeatIcon, StudentIcon } from "@/page/home/icons/home-icons";
import { Button } from "@/components/button";

import Theme from "@/styles/theme";

import {
  Container,
  ContainerButton,
  DescriptionContainer,
  ContainerCards,
  ContentCard,
  DotRounded,
  Card
} from "./styles";
import { useNavigate } from "react-router-dom";
import { STUDENT_PATH, VIEW_HOME_PATH } from "@/routes/paths/paths.private";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const navigateToView = () => navigate(VIEW_HOME_PATH());
  const onGoToStep = (url: string) => navigate(url);
  return (
    <Container>
      <ContainerButton>
        <Button outline={true} onClick={navigateToView}>
          <span>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContainerButton>
      <DescriptionContainer>
        <p>Olá, como vai? </p>
        <p>
          Você acessou o portal online do{" "}
          <b>
            Programa de Pós Graduação em Educação - Processos Formativos e Desigualdades Sociais da
            Faculdade de Formação de Professores da UERJ.
          </b>
        </p>
        <p>
          Aqui você encontra informações sobre os cursos de mestrado e doutorado, bolsas, editais e
          tutoriais.
        </p>
        <p>Selecione a opção referente ao seu título de ingresso no PPGEdu:</p>
      </DescriptionContainer>
      <ContainerCards>
        <ContentCard onClick={() => onGoToStep(STUDENT_PATH())}>
          <DotRounded>1</DotRounded>
          <Card>
            <span>
              <StudentIcon size={48} color={Theme.colors.blue.blueDark} />
              <p>Aluno</p>
            </span>
          </Card>
        </ContentCard>
        <ContentCard>
          <DotRounded>2</DotRounded>
          <Card>
            <span>
              <GraduateCapIcon size={48} color={Theme.colors.blue.blueDark} />
              <p>Canditado de Doutorado</p>
            </span>
          </Card>
        </ContentCard>
        <ContentCard>
          <Card>
            <span>
              <MedalIcon size={48} color={Theme.colors.blue.blueDark} />
              <p>Canditado de Mestrado</p>
            </span>
          </Card>

          <DotRounded>3</DotRounded>
        </ContentCard>
        <ContentCard>
          <Card>
            <span>
              <RepeatIcon size={48} color={Theme.colors.blue.blueDark} />
              <p>Egresso</p>
            </span>
          </Card>

          <DotRounded>4</DotRounded>
        </ContentCard>
      </ContainerCards>
    </Container>
  );
};

export default Home;
