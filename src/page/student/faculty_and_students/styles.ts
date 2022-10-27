import Theme from "@/styles/theme";
import styled from "styled-components";

// import { DotRounded as CommonDot } from "@/components/dot-rounded";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
`;

export const SwitchStageButton = styled.button<{ isSelected: boolean }>`
  padding: 0.75rem 1.5rem;
  margin: 0 0.3rem;

  background-color: ${({ isSelected }) =>
    isSelected ? Theme.colors.blue.normalBlue : Theme.colors.blue.extraLightBlue};
  color: ${({ isSelected }) =>
    isSelected ? Theme.colors.white.white : Theme.colors.blue.blueDark};

  border: none;
  border-radius: 6px;

  font-size: 1rem;

  cursor: pointer;
`;

export const BackButton = styled.button`
  padding: 0 6rem;
  height: 48px;

  border: 1px solid ${Theme.colors.blue.blueDark};
  background-color: ${Theme.colors.white.white};
  border-radius: 6px;

  font-size: 1rem;
  color: ${Theme.colors.blue.blueDark};

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${Theme.colors.white.mediumWhite};
  }
`;
