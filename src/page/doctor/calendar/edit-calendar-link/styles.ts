import styled from "styled-components";
import Theme from "@/styles/theme";

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;

  background-color: ${Theme.colors.white.mediumWhite};

  border: none;
  border-radius: 4px;

  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

  font-size: 1.25rem;
  color: ${Theme.colors.black.blackMedium};
  /* margin-bottom: 1rem; */

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Theme.colors.grey.mediumGrey};
  }
`;
