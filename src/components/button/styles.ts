import styled from "styled-components";

export const Container = styled.button<{ outline: boolean }>`
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.white.white : theme.colors.blue.blueDark};
  width: 100%;
  height: 52px;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.blue.blueDark : theme.colors.white.white};
  font-weight: 600;
  outline: none;
  border: ${({ theme, outline }) => (outline ? `2px solid ${theme.colors.blue.blueDark}` : "none")};
  cursor: pointer;
  border-radius: 4px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;
