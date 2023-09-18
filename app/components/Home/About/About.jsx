import {  CardAndText, Container, IconBeach, IconPalm, Name, SubText, Text, TextContainer,  } from './StyledAbout'
import beach from '../../../assets/home/beach.png';
import palm from '../../../assets/home/palm.png';
import hat from '../../../assets/home/hat.png';
import bed from '../../../assets/home/bed.png';
import Card from '../Card/Card';

const About = () => {

  return (
    <Container>
      <IconBeach src={beach}/>
      <IconPalm src={palm}/>
      <CardAndText>
        <TextContainer>
              <Text><Name>Mono Beach</Name> es un grupo de restaurantes sin franquicia que demuestra con los años su solidez y crecimiento.</Text>
              <SubText>Nuestra misión y visión está enfocada en ofrecer un servicio de calidad a un precio justo; ofreciendo menús que cambian día a día y cartas innovadoras que cubren distintos paladares.</SubText>
        </TextContainer>
        <Card/>
      </CardAndText>
      </Container>
  )
}

export default About