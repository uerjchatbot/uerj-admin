import styled, { css } from "styled-components";

import { DotRounded as CommonDot } from "@/components/dot-rounded";
import Theme from "@/styles/theme";

export const Container = styled.div``;

export const DescriptionContainer = styled.div`
  width: 90%;

  font-size: 1.5rem;
  color: ${Theme.colors.grey.grey};

  display: flex;
  flex-direction: column;

  p {
    margin: 0;
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

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  span {
    text-align: center;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.grey.grey};
    font-size: 1.4rem;
    margin: 1rem 0 0.25rem 0;
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
  padding-bottom: 0.5rem;
`;

export const DotRounded = styled(CommonDot)`
  width: 80px;
  height: 80px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;

  background-color: ${Theme.colors.white.mediumWhite};

  border: none;
  border-radius: 4px;

  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

  font-size: 1.25rem;
  color: ${Theme.colors.black.blackMedium};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Theme.colors.grey.mediumGrey};
  }
`;

export const ContainerButton = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: start;
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

export const Title = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 1.375rem;
`;

const BaseTitle = css`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.blue.blueDark};
`;

export const QuestionTitle = styled.span`
  ${BaseTitle}

  p {
    ${BaseTitle}
  }
`;
