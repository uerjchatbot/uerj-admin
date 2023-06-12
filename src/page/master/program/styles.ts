import { DotRounded as CommonDot } from "@/components/dot-rounded";
import styled from "styled-components";

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
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.grey.grey};
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  div {
    width: 15%;
  }
`;

export const ContainerCards = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr;
  gap: 36px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 90px;
  }
  padding-bottom: 48px;
`;

export const ContentCard = styled.div`
  width: 100%;
  height: auto;

  div {
    margin-top: 4px;

    span {
      /* text-align: center; */
      font-size: 1.5rem;
    }

    p {
      margin: 1rem 0;
      padding-left: 1rem;
      color: ${({ theme }) => theme.colors.grey.grey};
      font-size: 1.4rem;
    }
  }

  button {
    width: 15%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 1rem;

    li {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.grey.grey};
    }
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

export const DatePickerContainer = styled.div`
  padding: 8px;
  margin-left: 1rem;
  margin-right: 0.5rem;

  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    color: ${({ theme }) => theme.colors.blue.normalBlue};
  }
`;

export const CardItem = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;

  span {
    margin: 1rem 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }

  p {
    padding-left: 1rem;
  }
`;

export const TeacherItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem;
  box-shadow: 0px 1px 6px rgba(184, 190, 194, 0.6);
  border-radius: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    border-radius: 50%;
    padding: 0.5rem 0;
    background-color: ${({ theme }) => theme.colors.blue.lightBlue};
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const TeacherListContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const HeaderTeacher = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: flex-start;
  }

  button {
    width: 300px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.colors.blue.lightBlue};

    border: 2px solid ${({ theme }) => theme.colors.blue.blueDark};
    border-radius: 5px;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.blue.blueDark};

    cursor: pointer;
  }
`;
