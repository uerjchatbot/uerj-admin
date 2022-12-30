import styled from "styled-components";

import { DotRounded as CommonDot } from "@/components/dot-rounded";
import Theme from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

export const ContainerButton = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  gap: 1rem;
  margin-top: 24px;
  button {
    width: 30%;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      svg {
        margin-left: 12px;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  width: 90%;
  margin: 42px auto;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.grey.grey};
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  div {
    width: 15%;
  }
`;

export const ContainerCards = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 36px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 90px;
  }
  padding-bottom: 48px;
`;

export const ContentCard = styled.div`
  width: 100%;

  div {
    margin-top: 4px;

    display: flex;
    align-items: center;

    span {
      text-align: center;
      font-size: 1.5rem;
    }
    p {
      color: ${({ theme }) => theme.colors.grey.grey};
      font-size: 1.4rem;
    }
  }

  button {
    width: 15%;

    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 1rem;

    li {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.grey.grey};
    }
  }

  @media (max-width: 1000px) {
    height: 190px;
  }
`;

export const ContentCardHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const DotRounded = styled(CommonDot)`
  width: 80px;
  height: 80px;
`;

export const DatePickerContainer = styled.div`
  padding: 8px;
  margin-left: 1rem;
  margin-right: 0.5rem;

  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    color: ${({ theme }) => theme.colors.blue.normalBlue};
  }
`;

// !Novo

export const HeaderContainer = styled.div`
  width: 90%;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;

  & .switch-step-container {
    display: flex;
    align-items: end;
    justify-content: flex-start;
  }
`;

export const SwitchStageButton = styled.button<{ isSelected: boolean }>`
  width: max-content;
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
