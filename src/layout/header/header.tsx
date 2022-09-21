import React from "react";
import ProfileImage from "@/assets/images/logo-ppgedu.png";

import {
  Container,
  Content,
  TitleContainer,
  UserContainer,
  UserContent,
  ImageContainer
} from "./styles";
import { Breadcrumb } from "@/layout/header/breadcrumb";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Breadcrumb />
        </TitleContainer>
        <UserContainer>
          <ImageContainer>
            <img src={ProfileImage} alt="Imagem de perfil do usuário" />
          </ImageContainer>
          <UserContent>
            <span>
              Bem-vindo(a), <br /> Usuário(a) PPGedu
            </span>
          </UserContent>
        </UserContainer>
      </Content>
    </Container>
  );
};

export default Header;
