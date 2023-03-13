import { Button } from "@/components/button";
import * as Private from "@/routes/paths/paths.private";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const NewComunication: React.FC = () => {
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
        <S.FormTitle placeholder="Título da comunicação" />
      </S.BoxForm>
      <S.BoxForm>
        <S.FormContent placeholder="Comunicação" />
      </S.BoxForm>
    </S.Container>
  );
};

export default NewComunication;
