import styled from "styled-components";

export const Container = styled.button<{ outline: boolean }>`
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.white : theme.colors.blue.blueDark};
  width: 100%;
  height: 52px;
  color: ${({ theme, outline }) => (outline ? theme.colors.blue.blueDark : theme.colors.white)};
  font-weight: 600;
  outline: none;
  border: ${({ theme, outline }) => (outline ? `1px solid ${theme.colors.blue.blueDark}` : "none")};
  cursor: pointer;
  border-radius: 4px;
`;
