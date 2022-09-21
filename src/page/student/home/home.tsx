import { Button } from "@/components/button";
import React from "react";
import { BsPencil } from "react-icons/bs";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  DescriptionContainer,
  DotRounded
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerButton>
        <Button outline={true}>
          <span>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContainerButton>
      <DescriptionContainer>
        <p> Olá Aluno PPGEdu,</p>
        <p>
          Seja bem-vindo ao nosso sistema de comunicação offline, seu auxiliar estudantil na
          pós-graduação. Estamos à disposição sempre que precisar.
        </p>
        <p>Escolha entre as opções abaixo:</p>
      </DescriptionContainer>
      <ContainerCards>
        <ContentCard>
          <DotRounded>1</DotRounded>
          <span>
            Calendário <br /> letivo
          </span>
        </ContentCard>
        <ContentCard>
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
