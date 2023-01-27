import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem 0;
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <Main>
          <Title>
            <Design width={40} height={40} />
            Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Games</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Front End Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              HTML, CSS, Javascript, Redux, Sass, Bootstrap, Tailwind, Firebase.
            </p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
