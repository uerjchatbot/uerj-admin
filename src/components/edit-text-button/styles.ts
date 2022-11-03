import Theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 250px;
  height: 48px;

  background-color: ${Theme.colors.white.white};

  color: ${Theme.colors.blue.blueDark};
  font-size: 1.25rem;

  border: 2px solid ${Theme.colors.blue.blueDark};
  border-radius: 8px;
`;
