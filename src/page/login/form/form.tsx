import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { Container, ForgotPassword } from "./styles";

import { useAuth } from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";
import { ILoginFormData } from "@/models/login";
import LoginSchema from "@/schemas/login";
import { toast } from "react-toastify";

const FormLogin: React.FC = () => {
  // const navigate = useNavigate();

  const { setLoading } = useLoading();
  const { handleLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormData>();

  function openLoginPopup() {
    window.open(`${import.meta.env.VITE_API_URL}/google/login`, "_self");
  }

  const onSubmit: SubmitHandler<ILoginFormData> = async (data: ILoginFormData) => {
    try {
      setLoading(true);

      LoginSchema.isValid(data);

      await handleLogin(data);

      setLoading(false);

      openLoginPopup();
    } catch (error) {
      toast.error("Usuário incorreto ou não cadastrado");
      setLoading(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="E-mail"
          placeholder="Digite seu e-mail"
          register={register}
          name="email"
          required
          errorMessage="O email é obrigatório"
          errors={errors}
        />

        <Input
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register}
          name="password"
          required
          errorMessage="A senha é obrigatório"
          errors={errors}
        />

        <ForgotPassword>
          <Link to={INITIAL_PATH()}>Esqueceu sua senha?</Link>
        </ForgotPassword>

        <Button type="submit">
          <p> Entrar</p>
        </Button>
      </form>
    </Container>
  );
};

export default FormLogin;
