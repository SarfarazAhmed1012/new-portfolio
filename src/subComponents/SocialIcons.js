import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  transition: all 0.3s ease-in-out;
  &:hover {
    /* transform: rotate(360deg); */
    width: 10px;
    background-color: black;
  }
  animation: myanimation 0.5s ease-in-out;
  @keyframes myanimation {
    0% {
      width: 100px;
      background-color: black;
    }
    50% {
      width: 150px;
      background-color: red;
    }
    100% {
      width: 100px;
      background-color: black;
    }
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
