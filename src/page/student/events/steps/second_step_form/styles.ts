import Theme from "@/styles/theme";
import styled from "styled-components";
import { DotRounded as CommonDot } from "@/components/dot-rounded";

export const DescriptionContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: ${Theme.colors.grey.grey};

  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const EditButtonContainer = styled.div`
  width: 90%;

  button {
    width: 30%;

    span {
      font-size: 1rem;
    }
  }
`;

export const ContainerCards = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
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
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const DotRounded = styled(CommonDot)`
  width: 80px;
  height: 80px;
`;

export const EventDataContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr;
  grid-gap: 1rem;

  section {
    margin-bottom: 2rem;

    p {
      margin: 0;
      padding: 0.25rem 1rem;
      color: ${({ theme }) => theme.colors.grey.mediumGrey};
      background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
      border-radius: 4px;
    }
  }
`;

export const EventLinkContainer = styled.div`
  section {
    margin-bottom: 2rem;

    p {
      margin: 0;
      padding: 0.25rem 1rem;
      color: ${({ theme }) => theme.colors.grey.mediumGrey};
      background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
      border-radius: 4px;
    }
  }
`;
