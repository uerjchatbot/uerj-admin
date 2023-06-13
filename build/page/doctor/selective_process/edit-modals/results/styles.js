import styled from "styled-components";
export const QuestionContainer = styled.div `
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 10% 1fr;

  span {
    font-size: 1.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const InputsContainer = styled.div `
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > .data {
    background-color: ${({ theme }) => theme.colors.blue.lightBlue};
    border: none;
  }
`;
export const Input = styled.input `
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.grey.grey};

  border: 1px solid ${({ theme }) => theme.colors.grey.mediumGrey};
  border-radius: 4px;
  font-size: 1.25rem;
`;
//# sourceMappingURL=styles.js.map