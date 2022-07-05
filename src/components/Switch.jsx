import React, {useState} from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  background-color: ${({theme}) =>theme.bgn};
  transition: 0.5s all ease-in;
`;

const SwitchWrapper = styled.div`
 
 margin: auto;
 padding-top: 1rem;
 display: flex;
 flex-wrap: wrap;
 flex-direction: row-reverse;
`;

const SwitchBGN = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 30px;
  margin-left: 565px;
  margin-bottom: 20px;
  transition: 0.5s all ease-in;
  background-color: #697C9A;

  @media (max-width: 414px) {

    margin-left: 30px;
  }

`;

const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left:   ${({position}) => (position ?"45px":"5px")};
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #FFFFFF;
  transition: 0.4s all ease-in;
  outline: none;
`;

export const Switch = (props) =>{

    const [position, setPosition] = useState(false);

    const changeMode = () =>{
      if(props.theme === "light"){
        props.setTheme("dark");
        changePosition();
      }else{
        props.setTheme("light");
        changePosition();
      }
    }

    const changePosition = () =>{
      setPosition(!position);
    };

    return(
       <SwitchContainer>
         <SwitchWrapper>
           <SwitchBGN>
             <ButtonSwitch
                onClick={()=> changeMode()}
                position={position}
             ></ButtonSwitch>
           </SwitchBGN>
         </SwitchWrapper>
       </SwitchContainer>
    )
 } 