import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SliderButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }

  &.prev {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &.next {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const CardSliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const CardSliderContent = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: ${({ translateX }) => `translateX(-${translateX}%)`};
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 100%;
  /* &:hover {
    transform: scale(1.2); 
  } */

`;

export const CardImage = styled.img`
  width: 100%;
  height: 600px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
`;