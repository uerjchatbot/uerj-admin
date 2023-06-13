import styled from "styled-components";
import { Card as CommonCard } from "@/page/home/card";
import { DotRounded as CommonDot } from "@/components/dot-rounded";
export const Container = styled.div ``;
export const ContainerButton = styled.div `
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
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
export const DescriptionContainer = styled.div `
  width: 90%;
  margin: 42px auto;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.grey.grey};
  div {
    font-size: 1.4rem;
  }
`;
export const ContainerCards = styled.div `
  width: 90%;
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
export const ContentCard = styled.div `
  width: 100%;
  height: 100px;
  position: relative;
  cursor: pointer;

  @media (max-width: 1000px) {
    height: 190px;
  }
`;
export const Card = styled(CommonCard) `
  width: 100%;
  height: 200px;
  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      color: ${({ theme }) => theme.colors.blue.blueDark};
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`;
export const DotRounded = styled(CommonDot) `
  width: 80px;
  height: 80px;
  left: -28px;
  top: -28px;
  position: absolute;
`;
//# sourceMappingURL=styles.js.map