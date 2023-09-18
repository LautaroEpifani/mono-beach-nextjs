import { BiDownArrow } from "react-icons/bi"
import { CardContent, CenteredText, ContainerButtons, LogoImage, MenuButton, ReservationButton, TourButton } from "./StyledCard"
import logo from '../../../assets/nav/logo-mono.png';

const Card = () => {
  return (
    <CardContent >
          <LogoImage src={logo} alt="Logo" />
          <ContainerButtons>
            <MenuButton>Carta</MenuButton>
            <ReservationButton>Reservar</ReservationButton>
          </ContainerButtons>
          <TourButton><BiDownArrow/> Haz un tour <BiDownArrow/></TourButton>
          <CenteredText>Carrer de Eduard Maristany, 85, 1, 08912 Badalona, Barcelona</CenteredText>
      </CardContent>
  )
}

export default Card