import styled from "styled-components";

export const QuestionContainer = styled.div`
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 10% 1fr;
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

// ! Novo //

export const DescriptionContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey.grey};

  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const EventDataContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr;
  grid-gap: 1rem;

  section {
    margin-bottom: 2rem;

    & > input {
      width: 100%;
      margin: 0;
      padding: 0.25rem 1rem;
      color: ${({ theme }) => theme.colors.grey.mediumGrey};
      background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
      border-radius: 4px;
    }
  }
`;

export const EventLinkContainer = styled.div`
  section {
    margin-bottom: 2rem;

    input {
      width: 100%;
      margin: 0;
      padding: 0.25rem 1rem;
      color: ${({ theme }) => theme.colors.grey.mediumGrey};
      background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
      border-radius: 4px;
    }
  }
`;
