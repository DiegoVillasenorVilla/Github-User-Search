import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Container } from "./components/Container";
import { Cover } from "./components/Cover";
import Themes from "./components/Theme/Themes";
import { ThemeProvider } from "styled-components";
import { Switch } from "./components/Switch";


const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgn};
  transition: 0.5s all ease-in;
`;

const Title = styled.h1`
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${({ theme }) => theme.maintext};
  margin-top: 144px;
  margin-right: 957px;
  margin-left: 355px;

  @media (max-width: 768px) {
    margin-left: 500px;
  }

  @media (max-width: 414px) {
    margin-top: 10px;
    margin-left: 700px;
  }

  @media (max-width: 375px) {
    margin-left: 750px;
  }
`;



function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={Themes[theme]}>
      <AppContainer>
        <Title> devfinder</Title>
        <Switch theme={theme} setTheme={setTheme} />
        <Cover theme={theme} />
        <Container/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
