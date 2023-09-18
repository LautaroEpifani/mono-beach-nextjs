import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 100px;
  height: 500px;
  /* position: relative; */
  border: 5px solid transparent;
  border-image: linear-gradient(to right, #222222 70%, #deb874 70%);
  border-image-slice: 1;
`;

export const ContainerVideo = styled.div`
 
  position: relative;
  /* position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  z-index: 1; */
`;

export const StyledVideo = styled.video`
  width: 500px;
  height: 300px;
  /* object-fit: initial; */
`;

export const Circle = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TextContainer = styled.div`
    width: 50%;
    margin-bottom: 80px;
    line-height: 28px;
    font-family: 'Raleway', sans-serif; 
`;

export const TextIntro = styled.p`
  color: #DEB874;
`;

export const Title = styled.h1`
 color: #222222
`;

export const Text = styled.p`
  
`;
