import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
  justify-content: right;
  padding: 80px;
`;



//----- icons

export const Icons = styled.img`
  position: absolute;
  width: 150;
  height: 150px;
`;

export const IconBeach = styled(Icons)`
  bottom: 0;
  left: -5px;
`;

export const IconPalm = styled(Icons)`
  top: 0;
  right: 0;
`;


export const CardAndText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
border: 5px solid transparent;
  border-image: linear-gradient(to bottom,  #deb874 70%, #222222 70%);
  border-image-slice: 1;
 width: 60%;
 margin-left: 40px;
 font-family: 'Raleway', sans-serif;
 padding: 20px;
 line-height: 40px;
`;

export const Text = styled.p`
   font-size: 1.5rem;
`;

export const Name = styled.span`
    color: #deb874;
    font: bold;
`;

export const SubText = styled.p`
   font-size: 1.2rem;
`;