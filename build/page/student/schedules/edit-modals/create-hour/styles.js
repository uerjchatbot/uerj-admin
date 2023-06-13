import styled from "styled-components";
export const InputsContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
export const InputColumnContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;

    p {
      font-size: 1rem;
    }
  }
`;
export const Input = styled.input `
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.blue.lightBlue};
  font-size: 1rem;

  border-radius: 4px;

  color: ${({ theme }) => theme.colors.blue.blueDark};
  border: 2px solid ${({ theme }) => theme.colors.blue.blueDark};
`;
//# sourceMappingURL=styles.js.map