import React from "react";

import Theme from "@/styles/theme";

import Logo from "@/assets/images/logo.png";
import LogoMarca from "@/assets/images/logo-marca.png";

import { STUDENT_PATH, HOME_PATH, MASTER_PATH } from "@/routes/paths/paths.private";
import { StudentIcon, GraduateCapIcon, MedalIcon, RepeatIcon } from "@/page/home/icons/home-icons";

import { IconInterface } from "@/types/interface/icons/icons.interface";

import { Container, MenuIcon, LogoContainer, ExitCotainer, MenuContainer } from "./styles";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { useNavigate } from "react-router-dom";

interface IconProps {
  Icon: React.FC<IconInterface>;
  path: string;
  text: string;
}

const Icons: IconProps[] = [
  {
    Icon: StudentIcon,
    text: "1 - Aluno",
    path: STUDENT_PATH()
  },
  {
    Icon: GraduateCapIcon,
    text: "2 - Canditado de Doutorado",
    path: HOME_PATH()
  },
  {
    Icon: MedalIcon,
    text: "3 - Canditado de Mestrado",
    path: MASTER_PATH()
  },
  {
    Icon: RepeatIcon,
    text: "4 - Egresso",
    path: HOME_PATH()
  }
];

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const onExit = () => navigate(INITIAL_PATH());

  const renderIcon = ({ Icon, path, text }: IconProps) => {
    const isActive = location.pathname.includes(path);
    return (
      <MenuIcon active={isActive} key={text}>
        <Icon size={32} color={isActive ? Theme.colors.blue.blueDark : Theme.colors.white.white} />
        <span>{text}</span>
      </MenuIcon>
    );
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo UERJ" />
        <img src={LogoMarca} alt="Logo marca UERJ" />
      </LogoContainer>
      <MenuContainer>{Icons.map((icon) => renderIcon(icon))}</MenuContainer>
      <ExitCotainer>
        <span />
        <p onClick={onExit}>Sair</p>
      </ExitCotainer>
    </Container>
  );
};

export default Menu;
