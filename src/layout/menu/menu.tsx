import React from "react";

import Theme from "@/styles/theme";

import LogoMarca from "@/assets/images/logo-marca.png";
import Logo from "@/assets/images/logo.png";

import { GraduateCapIcon, MedalIcon, RepeatIcon, StudentIcon } from "@/page/home/icons/home-icons";
import { DOCTOR_PATH, EGRESS_PATH, MASTER_PATH, STUDENT_PATH } from "@/routes/paths/paths.private";

import { IconInterface } from "@/types/interface/icons/icons.interface";

import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { useNavigate } from "react-router-dom";
import { Container, ExitCotainer, LogoContainer, MenuContainer, MenuIcon } from "./styles";

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
    path: DOCTOR_PATH()
  },
  {
    Icon: MedalIcon,
    text: "3 - Canditado de Mestrado",
    path: MASTER_PATH()
  },
  {
    Icon: RepeatIcon,
    text: "4 - Egresso",
    path: EGRESS_PATH()
  }
];

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const onExit = () => navigate(INITIAL_PATH());

  const renderIcon = ({ Icon, path, text }: IconProps) => {
    const isActive = location.pathname.includes(path);
    return (
      <MenuIcon active={isActive} key={text} onClick={() => navigate(path)}>
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
