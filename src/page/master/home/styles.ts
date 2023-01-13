import styled from "styled-components";
import { DotRounded as CommonDot } from "@/components/dot-rounded";
export const Container = styled.div``;

export const ContainerButton = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin-top: 24px;

  button {
    width: 30%;

    background-color: ${({ theme }) => theme.colors.white.white};

    transition: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white.mediumWhite};
    }

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
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.grey.grey};
  p {
    font-size: 1.4rem;
  }

  & > ${ContainerButton} {
    justify-content: start;
  }
`;

export const ContainerCards = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 90px;
  }
  padding-bottom: 48px;
`;

export const ContentCard = styled.div`
  width: 100%;
  height: 300px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 12px;
    text-align: center;
    height: 120px;
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    height: 190px;
  }
`;

export const DotRounded = styled(CommonDot)`
  width: 80px;
  height: 80px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
`;
