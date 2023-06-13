import { DotRounded as CommonDot } from "@/components/dot-rounded";
import styled from "styled-components";
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div `
  width: 100%;
  font-weight: 400;
  font-size: 1.375rem;
`;
export const ContainerButton = styled.div `
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
export const DescriptionContainer = styled.div `
  width: 90%;
  margin: 42px auto;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.grey.grey};
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  button {
    width: 15%;
  }
`;
export const ContainerCards = styled.div `
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
export const ContentCard = styled.div `
  width: 100%;

  /* .container-button { */
  button {
    width: 15%;

    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    height: 190px;
  }
`;
export const ContentCardHeader = styled.div `
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
export const DotRounded = styled(CommonDot) `
  width: 80px;
  height: 80px;
`;
export const QuestionTitle = styled.span `
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.blue.blueDark};
`;
//# sourceMappingURL=styles.js.map