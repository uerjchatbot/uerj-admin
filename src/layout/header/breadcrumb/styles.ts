import styled from "styled-components";

export const Container = styled.span`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue.blueDark};
    font-size: 1.4rem;
  }
`;
