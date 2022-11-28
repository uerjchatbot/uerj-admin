import styled from "styled-components";

export const QuestionContainer = styled.div`
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 10% 1fr;
`;

export const Input = styled.textarea`
  width: 100%;
  /* min-height: 50px;
  height: auto; */
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  padding: 0.5rem;

  font-size: 1.5rem;

  border: ${({ theme }) => `1px solid ${theme.colors.grey.grey}`};
`;
