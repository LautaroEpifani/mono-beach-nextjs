import { useRef } from "react";
import lemon from "../../../assets/home/lemon.mp4";
import poster from "../../../assets/home/poster.jpg";
import { StyledVideo, Circle, Container, ContainerVideo, TextContainer, TextIntro, Title, Text } from "./StyledVideo";

const Video = () => {
  const videoRef = useRef(null);
  const circleRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.setAttribute("controls", "controls");
    }
    if (circleRef.current) {
      circleRef.current.style.display = "none";
    }
  };

  return (
    <Container>
      <TextContainer>
        <TextIntro>Una experiencia única</TextIntro>
        <Title>Visita Mono Beach</Title>
        <Text>
          Autenticidad y calidad son pilares esenciales de nuestra manera de
          entender la gastronomía. En cada restaurante de Mono Beach puedes
          disfrutar de auténticos platos. Elige entre una gran variedad de
          ensaladas, carpaccios, risottos y gratinados. No te vayas sin probar
          algunas de nuestras más de 300 combinaciones de platos y salsas en
          cada restaurante de Mono Beach. Y por supuesto, no olvides pedir
          alguno de nuestros exquisitos postres; tiramisú casero o helados
          artesanales, entre muchos otros. Todo ello conforma una amplia oferta
          materializada en generosas raciones.
        </Text>
      </TextContainer>
      <ContainerVideo>
        <StyledVideo ref={videoRef} preload="none" poster={poster}>
          <source type="video/mp4" src={lemon} />
        </StyledVideo>
        <Circle onClick={playVideo} ref={circleRef}>
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.20002 13.4006C1.11018 13.4006 1.02033 13.378 0.939083 13.3324C0.770854 13.2381 0.666687 13.0603 0.666687 12.8673V1.13398C0.666687 0.94101 0.770854 0.763145 0.939083 0.668874C1.10757 0.574343 1.31408 0.578249 1.47815 0.67877L11.0781 6.54544C11.2367 6.64257 11.3334 6.81497 11.3334 7.00065C11.3334 7.18632 11.2367 7.35872 11.0781 7.45585L1.47815 13.3225C1.39299 13.3746 1.29637 13.4006 1.20002 13.4006ZM1.73335 2.08502V11.9163L9.77711 7.00065L1.73335 2.08502Z"
              fill="#111111"
            />
          </svg>
        </Circle>
      </ContainerVideo>
    </Container>
  );
};

export default Video;
