import React from "react";
import styled from "styled-components";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

const InfoContainer = styled.div`
  display: flex;
  margin-left: 580px;

  @media (max-width: 414px) {
    
   margin-left: 30px;
  }
`;

const Info = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  color:  ${({theme}) =>theme.mode};

`;

const Moon = styled.img`
  margin-left: 10px;
`;

const Sun = styled.img`
  margin-left: 10px;
`;


export const Cover = (props) => {

  let icon =  props.theme === "light" ? <Moon  src={moon} alt="Moon"/> : <Sun src={sun} alt="Sun"/>;
  let info = props.theme === "light" ? <Info>DARK</Info> : <Info>LIGHT</Info>;

  return (
    <InfoContainer>
      {info}
      {icon}
    </InfoContainer>
  );
};
