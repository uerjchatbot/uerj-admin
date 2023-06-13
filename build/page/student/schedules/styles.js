import { DotRounded as CommonDot } from "@/components/dot-rounded";
import Theme from "@/styles/theme";
import styled from "styled-components";
export const Container = styled.div `
  padding: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DescriptionContainer = styled.div `
  width: 100%;

  font-size: 1.5rem;
  color: ${Theme.colors.grey.grey};

  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;
export const ButtonContainer = styled.div `
  width: 25%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: red;
`;
export const EditButtonContainer = styled.div `
  margin-top: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  button {
    width: 15%;

    span {
      font-size: 1rem;
    }
  }
`;
export const AddSchedulesButton = styled.button `
  width: 30% !important;
  background-color: ${({ theme }) => `${theme.colors.blue.lightBlue}`};
  border: ${({ theme }) => `2px solid ${theme.colors.blue.blueDark}`};
  color: ${({ theme }) => `${theme.colors.blue.blueDark}`};
  border-radius: 4px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
  }
`;
export const EditButton = styled.button `
  width: 132px;
  height: 36px;

  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: ${Theme.colors.white.white};

  border: 2px solid ${Theme.colors.blue.blueDark};
  border-radius: 6px;

  cursor: pointer;

  font-size: 1.2rem;
`;
export const ContainerCards = styled.div `
  width: 90%;
  display: grid;
  justify-items: end;
  grid-template-rows: repeat(1, 1fr);
  gap: 36px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 90px;
  }

  padding-bottom: 48px;
`;
export const ContentCard = styled.div `
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
export const ContentCardHeader = styled.div `
  width: 100%;

  display: flex;
  /* align-items: start; */
  /* justify-content: flex-start; */
  /* gap: 1rem; */

  span {
    margin: 0;
    text-align: left;
  }
`;
export const DotRounded = styled(CommonDot) `
  width: 80px;
  height: 80px;
`;
export const ClassContainer = styled.div `
  width: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`;
export const ClassHeaderContainer = styled.div `
  width: 100%;

  margin-top: 3rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    color: ${Theme.colors.blue.blueDark};
  }

  button {
    width: 300px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${Theme.colors.blue.lightBlue};

    border: 2px solid ${Theme.colors.blue.blueDark};
    border-radius: 5px;

    font-size: 1rem;
    color: ${Theme.colors.blue.blueDark};

    cursor: pointer;
  }
`;
export const ClassDataContainer = styled.div `
  padding: 1rem;

  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 1px 6px rgba(184, 190, 194, 0.6);
  border-radius: 5px;
`;
export const ClassDataHeaderContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonGroup = styled.div `
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
`;
export const ClassDataNamesContainer = styled.div `
  ul {
    list-style: none;
    margin: 2rem 0 0 0;
    padding: 0;

    display: flex;
    gap: 8rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    li {
      margin-top: 0.5rem;

      font-size: 1.25rem;
      color: ${Theme.colors.grey.grey};
    }
  }
`;
export const Title = styled.div `
  font-weight: 400;
  font-size: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: flex-start;

  div p {
    margin: 0;
  }
`;
//# sourceMappingURL=styles.js.map