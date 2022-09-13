import React from "react";

import Logo from "@/assets/images/logo.png";
import LogoMarca from "@/assets/images/logo-marca.png";

import {
  Container,
  LeftSide,
  RightSide,
  ContainerLogo,
  ContainerLogoMarca,
  ContainersLogos,
  TitleLogin
} from "./styles";
import { FormLogin } from "@/page/login/form";

const Login: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <ContainersLogos>
          <ContainerLogoMarca>
            <img src={LogoMarca} alt="Logo Marca UERJ" />
          </ContainerLogoMarca>
          <ContainerLogo>
            <img src={Logo} alt="Logo UERJ" />
          </ContainerLogo>
        </ContainersLogos>
      </LeftSide>
      <RightSide>
        <TitleLogin>Login</TitleLogin>
        <FormLogin />
      </RightSide>
    </Container>
  );
};

export default Login;
