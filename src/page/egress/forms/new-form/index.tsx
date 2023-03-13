import { Button } from "@/components/button";
import * as Private from "@/routes/paths/paths.private";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const NewForm: React.FC = () => {
  const navigate = useNavigate();

  const handleBackNavigation = () => navigate(Private.EGRESS_FORMS());

  return (
    <S.Container>
      <S.Header>
        <S.ButtonGroup>
          <Button type="button">
            <span>
              <AiOutlineCheck size={16} />
              Salvar Formulário
            </span>
          </Button>
          <Button type="button" outline onClick={handleBackNavigation}>
            <span>Voltar</span>
          </Button>
        </S.ButtonGroup>
      </S.Header>
      <S.BoxForm>
        <S.FormTitle placeholder="Título do formulário" />
      </S.BoxForm>
      <S.BoxForm>
        <S.QuestionGroup>
          <S.QuestionTitle placeholder="Pergunta 1" />
          <S.QuestionInputItem>
            <label htmlFor="">a. </label>
            <input placeholder="Opção A" />
          </S.QuestionInputItem>
          <S.QuestionInputItem>
            <label htmlFor="">a. </label>
            <input placeholder="Opção A" />
          </S.QuestionInputItem>
        </S.QuestionGroup>
        <S.FormOptions>
          <h1>Tipo de formulário</h1>
          <S.BoxOptions>
            <S.ItemOption>
              <label>
                <input type="radio" name="radio" checked />
                Uma escolha
              </label>
              <span>Permitido somente uma seleção</span>
            </S.ItemOption>

            <S.ItemOption>
              <label>
                <input type="radio" name="radio" />
                Mais de uma escolha
              </label>
              <span>Permitido várias seleções</span>
            </S.ItemOption>
          </S.BoxOptions>
        </S.FormOptions>
      </S.BoxForm>
    </S.Container>
  );
};

export default NewForm;
