import React, { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps {
  children?: string | ReactNode;
  onClick?: () => void;
  outline?: boolean;
  type: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ children, onClick = () => {}, outline = false, type }) => {
  return (
    <Container onClick={onClick} outline={outline} type={type}>
      {children}
    </Container>
  );
};

export default Button;
