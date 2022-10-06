import styled from "styled-components";
import { DotRounded as CommonDot } from "@/components/dot-rounded";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.grey.grey};
  p {
    font-size: 1.4rem;
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
  cursor: pointer;

  /* background-color: red; */

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
  }

  @media (max-width: 1000px) {
    height: 190px;
  }
`;

export const ContentCardHeader = styled.div`
  width: 100%;

  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const DotRounded = styled(CommonDot)`
  width: 80px;
  height: 80px;
`;
