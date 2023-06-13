import styled from "styled-components";
import { Button } from "@/components/button";
import { DotRounded as CommonDot } from "@/components/dot-rounded";
export const DotRounded = styled(CommonDot) `
  width: 80px;
  height: 80px;
`;
export const Container = styled.div `
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Header = styled.section `
  width: 90%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;
export const ButtonContainer = styled.div `
  width: 25%;
  margin-bottom: 4rem;
`;
export const SignUpMatterButton = styled(Button) `
  width: 100%;
  background-color: red;
  span {
    color: red;
  }
`;
export const AddMatter = styled.button `
  width: 30% !important;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.blue.blueDark};
  background-color: ${({ theme }) => theme.colors.blue.lightBlue};
`;
export const TitleContainer = styled.div `
  button {
    margin-top: 0.5rem;
    width: 15%;
  }
`;
export const Title = styled.h3 `
  font-size: 1.5rem;
  color: #919699;
  font-weight: normal;
`;
export const Content = styled.section `
  width: 90%;
  margin-top: 3rem;
`;
export const ContentHeader = styled.div `
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }
`;
export const ContentBody = styled.div `
  display: flex;
  flex-direction: column;
`;
export const MatterHeaderContainer = styled.div `
  width: 100%;

  /* margin-top: 1rem; */
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;

  align-items: center;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }

  button {
    width: 15%;
    /* height: 48px; */

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & > .add-matter {
      background-color: ${({ theme }) => theme.colors.blue.lightBlue};
    }

    border: 2px solid ${({ theme }) => theme.colors.blue.blueDark};
    border-radius: 5px;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.blue.blueDark};

    cursor: pointer;
  }
`;
export const MattersList = styled.ul `
  list-style: none;
  padding: 0;

  li {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0px 1px 6px rgba(184, 190, 194, 0.6);
    border-radius: 4px;
    padding: 1rem;

    div {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }

    button {
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.colors.blue.lightBlue};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
//# sourceMappingURL=styles.js.map