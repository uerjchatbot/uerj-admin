import styled from "styled-components";
export const Container = styled.div `
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.blue.blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
  color: ${({ theme }) => theme.colors.blue.blueDark};
  font-size: 1.6rem;
`;
//# sourceMappingURL=styles.js.map