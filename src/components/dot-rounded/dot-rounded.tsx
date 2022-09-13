import React, { ReactNode } from "react";

import { Container } from "./styles";

interface DotRoundedProps {
  children: ReactNode;
  className?: string;
}

const DotRounded: React.FC<DotRoundedProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default DotRounded;
