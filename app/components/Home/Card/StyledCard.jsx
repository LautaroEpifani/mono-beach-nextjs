import { styled } from "styled-components";

export const CardContent = styled.div`
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-image: url("/src/assets/home/mono-hero.jpg");
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  width: 20%;
  text-align: center;
  border: 1px solid #000;
  padding-bottom: 80px;
  border-radius: 10px;
`;

export const LogoImage = styled.img`
  width: 60%;
  margin-bottom: 60px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 10px;
  border: none;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  width: 140px;
  color: #fff;
`;

export const MenuButton = styled(Button)`
  background-color: #DEB874;
`;

export const ReservationButton = styled(Button)`
  background-color: #222222;
`;

export const TourButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: #000 solid 1px;
  width: 70%;
`;

export const CenteredText = styled.h2`
  position: absolute;
  color: rgba(34, 34, 34, 0.8);
  font-family: "Raleway", sans-serif;
  font-size: 0.9rem;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
