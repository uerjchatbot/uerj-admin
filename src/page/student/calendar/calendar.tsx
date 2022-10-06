import React, { useState } from "react";

import { Button } from "@/components/button";
import { BsPencil } from "react-icons/bs";
import { SelectOptions } from "@/components/select";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  ContentCardHeader,
  DescriptionContainer,
  DotRounded
} from "./styles";
import { TextEditor } from "@/components/text-editor";

const Calendar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(
    "O Calendário Letivo é composto por datas fixadas para o cumprimento do semestre letivo no Programa de Pós Graduação em Educação."
  );

  const [cardText1, setCardText1] = useState("Período letivo");
  const [cardText2, setCardText2] = useState("Período de recesso");

  //TODO Ajeitar funções de editar e cancelar
  //TODO Pegar dados da API (ou dados mockados) para setar
  //TODO Fazer a lógica dos selects de data
  //TODO Análisar questões das formatações de texto front e mostrar na API

  return (
    <Container>
      <ContainerButton>
        {isEditing && (
          <Button outline={true}>
            <span
              onClick={() => {
                setIsEditing((oldValue) => !oldValue);
              }}>
              Salvar
            </span>
          </Button>
        )}

        <Button outline={true}>
          <span onClick={() => setIsEditing((oldValue) => !oldValue)}>
            {isEditing ? (
              "Cancelar"
            ) : (
              <>
                Editar <BsPencil size={16} />
              </>
            )}
          </span>
        </Button>
      </ContainerButton>

      {isEditing ? (
        <>
          <DescriptionContainer>
            <TextEditor value={description} setValue={setDescription} />
          </DescriptionContainer>

          <ContainerCards>
            <ContentCard>
              <ContentCardHeader>
                <DotRounded>1</DotRounded>
                <TextEditor value={cardText1} setValue={setCardText1} />
              </ContentCardHeader>
            </ContentCard>

            <ContentCard>
              <ContentCardHeader>
                <DotRounded>2</DotRounded>
                <TextEditor value={cardText2} setValue={setCardText2} />
              </ContentCardHeader>
            </ContentCard>
          </ContainerCards>
        </>
      ) : (
        <>
          <DescriptionContainer>
            <p>{description}</p>

            <p>Escolha a opção de interesse:</p>
          </DescriptionContainer>

          <ContainerCards>
            <ContentCard>
              <ContentCardHeader>
                <DotRounded>1</DotRounded>
                <span>{cardText1}</span>
              </ContentCardHeader>

              <p>
                O período letivo para alunos do PPGEdu tem início em{" "}
                <SelectOptions data={["1", "2", "3"]} />
                <SelectOptions data={["Janeiro", "Fevereiro", "Dezembro"]} />
                <SelectOptions data={["2023", "2024", "2025"]} />
                <br /> e finaliza em
                <SelectOptions data={["1", "2", "3"]} />
                <SelectOptions data={["Janeiro", "Fevereiro", "Dezembro"]} />
                <SelectOptions data={["2023", "2024", "2025"]} />
              </p>
            </ContentCard>

            <ContentCard>
              <ContentCardHeader>
                <DotRounded>2</DotRounded>
                <span>{cardText2}</span>
              </ContentCardHeader>
            </ContentCard>
          </ContainerCards>
        </>
      )}
    </Container>
  );
};

export default Calendar;
