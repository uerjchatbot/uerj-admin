import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  svg {
    position: absolute;
    right: 12px;
    bottom: 16px;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  margin-bottom: 12px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.grey.extraLightGrey};
  /* Neutral/03 */

  border: 1px solid ${({ theme }) => theme.colors.grey.extraLightGrey};
  border-radius: 4px;
  height: 42px;
  font-size: 1.2rem;
  padding-left: 1.2rem;
  outline: 1px solid ${({ theme }) => theme.colors.grey.extraLightGrey};
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.5rem;

  padding-bottom: 1rem;
`;
