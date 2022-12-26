import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.grey.grey};
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClassNameContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.35rem;
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
  border: none;
  box-shadow: 1px 2px 2px rgba(184, 190, 194, 0.6);
`;

export const SetStudentNameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.white.mediumWhite};
  background-color: ${({ theme }) => theme.colors.blue.normalBlue};
  border-radius: 5px;
`;

export const StudentsListContainer = styled.ul`
  list-style-type: none;

  margin: 0;
  padding: 0;
  div {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(n + 2) {
      border-top: ${({ theme }) => `1px solid ${theme.colors.grey.grey}`};
    }
  }
`;
