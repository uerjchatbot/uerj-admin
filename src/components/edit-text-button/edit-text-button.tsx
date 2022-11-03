import React from "react";
import { Container, Button } from "./styles";

type Props = {
  event?: () => Promise<void> | null;
};

const EditTextButton = ({ event }: Props) => {
  return (
    <Container>
      <Button onClick={event}>Salvar</Button>
    </Container>
  );
};

export default EditTextButton;
