"use client"
import {  useState } from 'react';
import hero from '../../../assets/home/mono-hero.jpg'

import { HeroContainer, HeroImage, DarkOverlay, Title } from './StyledHero'


const Hero = () => {

  const [isImageVisible, setImageVisible] = useState(false);

  const handleImageLoad = () => {
    setImageVisible(true);
  };

  return (
    <HeroContainer>
      <HeroImage
        src={hero}
        alt="bg image"
        isVisible={isImageVisible}
        onLoad={handleImageLoad}
      />
      <DarkOverlay isVisible={isImageVisible} />
      <Title>Vive una experiencia única <br></br> en Mono Beach</Title>
   
    </HeroContainer>
  )
}

export default Hero