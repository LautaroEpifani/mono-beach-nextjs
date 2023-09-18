import { styled } from "styled-components";
import "@fontsource/raleway";

//----background + animation

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222222;
  margin-bottom: 100px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 5s;
`;

export const DarkOverlay = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 2s; */
`;

export const Title = styled.h1`
  position: absolute;
  text-align: left;
  top: 30%;
  left: 10%;
  z-index: 1;
  color: #FFF;
  font-size: 4rem;
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
