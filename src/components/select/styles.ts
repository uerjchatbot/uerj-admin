import styled from "styled-components";

export const Select = styled.select`
  padding: 0.5rem;
  margin: 0 0.55rem;
  font-size: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white.mediumWhite};

  color: ${({ theme }) => theme.colors.grey.grey};

  option {
    color: ${({ theme }) => theme.colors.grey.grey};
  }

  &:focus {
    outline: none;
  }
`;
