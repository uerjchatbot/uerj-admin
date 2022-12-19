import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.grey.grey};

  border: 1px solid ${({ theme }) => theme.colors.grey.mediumGrey};
  border-radius: 4px;
  font-size: 1.25rem;
`;
