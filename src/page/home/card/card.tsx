import React, { ReactNode } from "react";

import { Container } from "./styles";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <Container className={className}> {children}</Container>;
};

export default Card;
