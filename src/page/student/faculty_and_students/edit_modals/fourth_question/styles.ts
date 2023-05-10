import styled from "styled-components";

export const QuestionContainer = styled.div`
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 10% 1fr;
`;

export const Input = styled.input`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  font-size: 1.5rem;

  border: ${({ theme }) => `1px solid ${theme.colors.grey.grey}`};
`;
