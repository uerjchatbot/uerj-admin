import React from "react";

import { Input } from "@/components/input";

import { Container, ForgotPassword } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { Button } from "@/components/button";
import { HOME_PATH } from "@/routes/paths/paths.private";

const FormLogin: React.FC = () => {
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate(HOME_PATH());
  };

  return (
    <Container>
      <Input type="text" label="E-mail" placeholder="Digite seu e-mail" />
      <Input type="password" label="Senha" placeholder="Digite sua senha" />
      <ForgotPassword>
        <Link to={INITIAL_PATH()}>Esqueceu sua senha?</Link>
      </ForgotPassword>
      <Button onClick={onClickSignUp}>
        <p> Entrar</p>
      </Button>
    </Container>
  );
};

export default FormLogin;
