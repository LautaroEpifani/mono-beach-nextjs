import { ContainerLogo, LanguageContainer, StyledContainer, ImgLogo, StyledUl, LanguageImg, NavLi } from "./StyledNav"
import logo from '../../assets/nav/logo-mono.png';
import es from '../../assets/nav/es.png';
import cat from '../../assets/nav/cat.png';
import en from '../../assets/nav/en.png';
import { useMemo, useState } from "react";

const Nav = () => {

  const [navOptions, setNavOptions] = useState([
    { id: 1, text: 'Inicio', active: true },
    { id: 2, text: 'Carta', active: false },
    { id: 3, text: 'Nosotros', active: false },
    { id: 4, text: 'Alérgenos', active: false },
    { id: 5, text: 'Contacto', active: false },
    { id: 6, text: 'Reserva', active: false },
  ]);

  const handleOptionClick = (id) => {
    const updatedOptions = navOptions.map((option) => {
      return {
        ...option,
        active: option.id === id,
      };
    });
    setNavOptions(updatedOptions);
  };

  //useMemo
  // const navOptionsMemoized = useMemo(() => navOptions, [navOptions]);

  return (
    <StyledContainer>
        <ContainerLogo>
          <ImgLogo src={logo} alt="logo"/>
        </ContainerLogo>
        <StyledUl>
          {
            navOptions.map((option, index) => (
              <>
              <NavLi key={option.id} onClick={() => handleOptionClick(option.id)} active={option.active}>{option.text}</NavLi>
               { option.id !== 6 ? <div> | </div> : <></> }
              </>
            ))
          }
        </StyledUl>
        <LanguageContainer>
          <LanguageImg src={es} alt="es"/>
          <LanguageImg src={cat} alt="cat"/>
          <LanguageImg src={en} alt="en"/>
        </LanguageContainer>
    </StyledContainer>
  )
}

export default Nav