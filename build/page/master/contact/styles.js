import { DotRounded as CommonDot } from "@/components/dot-rounded";
import styled from "styled-components";
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerButton = styled.div `
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
export const ContentCard = styled.div `
  padding: 2rem;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 36px;

  button {
    width: 15%;
    margin-bottom: 1rem;

    span {
      font-size: initial;
    }
  }

  span {
    text-align: center;
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 90px;
  }
`;
export const CardContent = styled.div `
  width: 100%;
  margin-top: 4px;

  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.grey.grey};
    font-size: 1.4rem;
  }
`;
export const DotRounded = styled(CommonDot) `
  width: 80px;
  height: 80px;
`;
export const Title = styled.div `
  font-weight: 400;
  font-size: 1.5rem;
`;
export const ContentCardHeader = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
//# sourceMappingURL=styles.js.map