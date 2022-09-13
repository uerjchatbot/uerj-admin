import React, { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps {
  children?: string | ReactNode;
  onClick?: () => void;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick = () => {}, outline = false }) => {
  return (
    <Container onClick={onClick} outline={outline}>
      {children}
    </Container>
  );
};

export default Button;
