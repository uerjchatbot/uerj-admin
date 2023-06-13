import styled from "styled-components";
export const LogoContainer = styled.div `
  display: none;
  background-color: ${({ theme }) => theme.colors.blue.normalBlue};
  img {
    width: 30%;
  }
`;
export const MenuIcon = styled.div `
  background-color: ${({ theme, active }) => active ? theme.colors.blue.extraLightBlue : "transparent"};
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.blue.blueDark} !important;
    }

    background-color: ${({ theme }) => theme.colors.blue.mediumLightBlue};
  }
`;
export const ExitCotainer = styled.div `
  width: 80%;
  margin: 0 auto;
  text-align: center;
  display: none;
  margin-top: 32px;

  height: 20%;
  p {
    color: ${({ theme }) => theme.colors.blue.blueDark};
    cursor: pointer;
  }
  span {
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blue.blueDark};
  }
`;
export const MenuContainer = styled.div `
  width: 100%;
`;
export const Container = styled.div `
  height: 100%;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.blue.normalBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    margin-bottom: 16px;
  }

  span {
    display: none;
  }

  &:hover {
    width: 360px;
    background-color: ${({ theme }) => theme.colors.blue.extraLightBlue};
    transition: 300ms linear;
    display: block;
    span {
      display: block;
    }

    ${ExitCotainer} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    ${LogoContainer} {
      display: flex;
      width: 100%;
      height: 300px;
      justify-content: space-around;
      align-items: center;
    }

    ${MenuIcon} {
      justify-content: left;
      align-items: center;
      font-weight: 600;

      span {
        color: ${({ theme }) => theme.colors.blue.blueDark};
      }

      svg {
        margin-left: 24px;
        margin-right: 10px;
      }
      svg path {
        fill: ${({ theme }) => theme.colors.blue.blueDark} !important;
      }
    }
  }
`;
//# sourceMappingURL=styles.js.map