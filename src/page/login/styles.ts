import styled from "styled-components";
import BackgroundImage from "@/assets/images/background-image-login.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  background-size: 100vw 100vh;
`;

export const LeftSide = styled.div`
  margin-left: auto;
  width: 45%;
  height: 100%;
`;

export const ContainersLogos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
`;

export const ContainerLogo = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  margin-right: 12px;
`;

export const ContainerLogoMarca = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  margin-right: 42px;
`;

export const RightSide = styled.div`
  width: 45%;
  height: 100%;
`;

export const TitleLogin = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  margin-top: 120px;
  color: ${(props) => props.theme.colors.blue.blueDark};
`;
