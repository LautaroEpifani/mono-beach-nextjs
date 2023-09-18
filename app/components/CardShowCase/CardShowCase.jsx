import { useEffect, useState } from "react";
import { CardContainer, CardImage, CardSliderContent, CardSliderWrapper, CardTitle, SliderButton, SliderContainer } from "./StyledCardShowCase";


const CardShowCase = () => {

  const [cards, setCards] = useState([
    // Tarjetas existentes
    { image: '/src/assets/home/chia.jpg', title: 'Tarjeta 1' },
    { image: '/src/assets/home/fruit.jpg', title: 'Tarjeta 2' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <SliderContainer>
      <SliderButton className="prev" onClick={handlePrev}>
        &#8249;
      </SliderButton>
      <CardSliderWrapper>
        <CardSliderContent translateX={currentIndex * 100}>
          {cards.map((card, index) => (
            <CardContainer key={index}>
              <CardImage src={card.image} alt={card.title} />
              <CardTitle>{card.title}</CardTitle>
            </CardContainer>
          ))}
        </CardSliderContent>
      </CardSliderWrapper>
      <SliderButton className="next" onClick={handleNext}>
        &#8250;
      </SliderButton>
    </SliderContainer>
  )
}

export default CardShowCase