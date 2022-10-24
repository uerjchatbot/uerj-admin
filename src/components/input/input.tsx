import { EyesClosed, EyesOpen } from "@/assets/icons/passwords-icons";
import Theme from "@/styles/theme";
import React, { useMemo, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Container, ErrorMessage, Input as InputStyled, Label } from "./styles";

interface InputProps {
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  type?: "text" | "number" | "password" | "email";
  required?: boolean;
  register: UseFormRegister<any>;
  errorMessage?: string;
  errors?: any;
}

const Input: React.FC<InputProps> = ({
  required = false,
  type = "text",
  label,
  name,
  placeholder,
  value,
  register,
  errorMessage,
  errors
}) => {
  const [clickedIconPassword, setClickedIconPassword] = useState<boolean>(false);

  const showIconPassword = () => {
    if (type !== "password") return null;

    return clickedIconPassword ? (
      <EyesClosed
        color={Theme.colors.blue.blueDark}
        size={14}
        onClick={() => setClickedIconPassword(!clickedIconPassword)}
      />
    ) : (
      <EyesOpen
        color={Theme.colors.blue.blueDark}
        size={14}
        onClick={() => setClickedIconPassword(!clickedIconPassword)}
      />
    );
  };

  const typeComponent = useMemo(() => {
    if (type === "password" && clickedIconPassword) {
      return "text";
    }

    return type;
  }, [type, clickedIconPassword]);

  return (
    <>
      <Container>
        <Label>{label}</Label>

        <InputStyled
          type={typeComponent}
          defaultValue={value}
          placeholder={placeholder}
          {...register(name, { required: required ? errorMessage : false })}
        />
        {showIconPassword()}
      </Container>
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </>
  );
};

export default Input;
