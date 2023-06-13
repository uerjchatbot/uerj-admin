import styled from "styled-components";
export const Container = styled.div `
  width: 90%;

  form > div {
    margin-bottom: 12px;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;
export const ForgotPassword = styled.div `
  width: 100%;
  display: flex;
  justify-content: end;
  a {
    color: ${({ theme }) => theme.colors.blue.blueDark};
    font-size: 1.2rem;
  }

  padding-bottom: 1rem;
`;
//# sourceMappingURL=styles.js.map