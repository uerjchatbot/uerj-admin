import styled from "styled-components";

export const QuestionContainer = styled.div`
  margin-bottom: 2rem;

  display: flex;
  gap: 1rem;

  font-size: 1rem;
`;

export const InputsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > .data {
    background-color: ${({ theme }) => theme.colors.blue.lightBlue};
    border: none;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.grey.grey};

  border: 1px solid ${({ theme }) => theme.colors.grey.mediumGrey};
  border-radius: 4px;
  font-size: 1.25rem;
`;

export const EventTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey.mediumGrey};

  strong {
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }
`;

export const EventData = styled.p`
  width: fit-content;

  padding: 0.25rem 1rem;
  color: ${({ theme }) => theme.colors.grey.mediumGrey};
  background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};

  .banking-data {
    background-color: red;
  }
`;
