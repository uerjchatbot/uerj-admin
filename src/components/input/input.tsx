import { EyesClosed, EyesOpen } from "@/assets/icons/passwords-icons";
import Theme from "@/styles/theme";
import React, { useMemo, useState } from "react";

import { Container, Input as InputStyled, Label } from "./styles";

interface InputProps {
  name?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  type?: "text" | "number" | "password" | "email";
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  required = false,
  type = "text",
  label,
  name,
  placeholder,
  value
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
    <Container>
      <Label>{label}</Label>
      <InputStyled
        required={required}
        type={typeComponent}
        defaultValue={value}
        name={name}
        placeholder={placeholder}
      />
      {showIconPassword()}
    </Container>
  );
};

export default Input;
