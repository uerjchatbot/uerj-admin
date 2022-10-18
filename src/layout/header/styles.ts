import styled from "styled-components";
import Background from "@/assets/images/background-header.png";

export const Container = styled.header`
  border: 2px solid ${({ theme }) => theme.colors.grey.extraLightGrey};
  height: 100px;
  background-image: url(${Background});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.blue.blueDark};
  }
`;

export const UserContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  object-fit: contain;
  img {
    width: 80%;
    height: 60%;
  }
`;

export const UserContent = styled.div``;
