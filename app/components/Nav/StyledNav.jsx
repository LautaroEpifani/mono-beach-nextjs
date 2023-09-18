import { styled } from "styled-components";

export const StyledContainer =  styled.div`
    display: flex;
    gap: 20px;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 34, 34, 0.8);
    position: fixed;
    z-index: 2;
    width: 100%;
`;

export const ContainerLogo =  styled.div`
    
`;

export const ImgLogo =  styled.img`
    width: 280px;
    height: 70px;
`;

export const StyledUl =  styled.ul`
    width: 60%;
    display: flex;
    gap: 20px;
    list-style-type: none;
    margin-right: 20px;
    margin-left: 100px;
    align-items: center;
    color: #575757;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    /* padding: 1.5em; */
`;

export const NavLi =  styled.li`
    cursor: pointer;
    ${(props) =>
    props.active &&
    `
    font-weight: bold;
    color: #fff;
  `}
`;

export const LanguageContainer =  styled.div`
    display: flex;
    gap: 20px;  
    align-items: center;
    height: 40px;
`;


export const LanguageImg =  styled.img`
    width: 20px;
    height: 15px;
   
`;

