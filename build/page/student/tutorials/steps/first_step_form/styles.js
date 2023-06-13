import styled from "styled-components";
import { DotRounded as CommonDot } from "@/components/dot-rounded";
import Theme from "@/styles/theme";
export const Container = styled.div `
  width: 90%;
`;
export const Header = styled.div `
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.grey.grey};
  }

  div {
    width: 15%;

    span {
      font-size: 1rem !important;
    }
  }
`;
export const DescriptionContainer = styled.div `
  width: 90%;

  font-size: 1.5rem;
  color: ${Theme.colors.grey.grey};

  display: flex;
  flex-direction: column;

  p {
    margin: 0;
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
  margin-top: 3rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  button {
    margin-top: 0.5rem;
    width: 15%;
    span {
      font-size: 1rem;
    }
  }

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
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  div {
    span {
      font-size: 1rem !important;
    }
  }
`;
export const DotRounded = styled(CommonDot) `
  width: 80px;
  height: 80px;
`;
export const ContainerButton = styled.div `
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
export const HourAndDateContainer = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  align-items: end;

  div {
    width: fit-content;
  }
`;
export const EventTitle = styled.p `
  color: ${({ theme }) => theme.colors.grey.mediumGrey};

  strong {
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }
`;
export const EventData = styled.p `
  width: fit-content;

  padding: 0.25rem 1rem;
  color: ${({ theme }) => theme.colors.grey.mediumGrey};
  background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};

  .banking-data {
    background-color: red;
  }
`;
export const AddBankingButton = styled.button `
  height: 48px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blue.blueDark};
  background-color: ${({ theme }) => theme.colors.blue.lightBlue};

  border: 2px solid ${({ theme }) => theme.colors.blue.blueDark};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const BankingTeachersContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
export const BankingTeachers = styled.section `
  padding: 0.25rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 1px 6px rgba(184, 190, 194, 0.6);

  button {
    background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .banking-data {
    background-color: transparent;
  }
`;
export const DataList = styled.ul `
  padding: 0;
  list-style: none;

  strong,
  h4,
  li {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.grey.grey};
    font-weight: normal;
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }

  h4 {
  }

  li {
    margin: 2rem 0;
    button {
      width: 15%;
      font-size: 1rem;
    }
  }
`;
//# sourceMappingURL=styles.js.map