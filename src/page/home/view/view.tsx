import { Button } from "@/components/button";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { EditorText } from "@/components/editor/main";
import { HOME_PATH } from "@/routes/paths/paths.private";

import { ButtonContainer, Container, Content } from "./styles";

const ViewHome: React.FC = () => {
  const navigate = useNavigate();

  const onBack = () => navigate(HOME_PATH());

  return (
    <Container>
      <ButtonContainer>
        <Button outline={true} onClick={onBack} type={"button"}>
          Cancelar
        </Button>
      </ButtonContainer>
      <Content>{/* <EditorText /> */}</Content>
      <ButtonContainer>
        <Button outline={true} onClick={onBack} type={"button"}>
          Salvar
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ViewHome;
