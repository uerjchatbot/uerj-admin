import { DotRounded as CommonDot } from "@/components/dot-rounded";
import Theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div``;

export const DescriptionContainer = styled.div`
  margin-bottom: 2rem;

  font-size: 1.5rem;
  color: ${Theme.colors.grey.grey};

  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;

  button {
    width: 25%;

    span {
      font-size: 1rem;
    }
  }
`;

export const AddTeacherButton = styled.button`
  width: 40% !important;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.blue.blueDark};
  background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
  border: ${({ theme }) => `2px solid ${theme.colors.blue.blueDark}`};
  border-radius: 8px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export const EditButton = styled.button`
  width: 132px;
  height: 48px;

  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;

  background-color: ${Theme.colors.white.white};

  border: 2px solid ${Theme.colors.blue.blueDark};
  border-radius: 6px;

  cursor: pointer;
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
`;

export const DotRounded = styled(CommonDot)`
  width: 80px;
  height: 80px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 1rem;

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

export const ClassDataContainer = styled.div`
  width: 100%;
  padding: 1rem;

  margin-top: 0;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 1px 6px rgba(184, 190, 194, 0.6);
  border-radius: 5px;
`;

export const ClassDataHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;

    strong {
      color: ${Theme.colors.blue.blueDark};
    }
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;

      background-color: ${Theme.colors.blue.lightBlue};

      border: none;
      border-radius: 50%;

      font-size: 1rem;

      cursor: pointer;
    }
  }
`;

export const ClassDataNamesContainer = styled.div`
  ul {
    list-style: none;
    margin: 2rem 0 0 0;
    padding: 0;

    li {
      margin-top: 0.5rem;

      font-size: 1.25rem;
      color: ${Theme.colors.grey.grey};
    }
  }
`;

export const Card = styled.div`
  display: flex;
  gap: 1rem;

  strong {
    font-size: 1.3rem;
  }

  span {
    text-align: left;
  }
`;
