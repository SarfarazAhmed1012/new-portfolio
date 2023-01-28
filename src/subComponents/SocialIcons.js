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
  .social_buttons {
    &:hover {
      background-color: rgba(109, 0, 255, 0.3);
      box-shadow: 0 0 8px 6px rgba(109, 0, 255, 0.3);
      border-radius: 50%;
    }
  }
  /* .Github_icon {
    &:hover {
      padding: 4px;
    }
  }
  .facebook_icon {
    &:hover {
      padding: 4px;
    }
  }
  .linkedin_icon {
    &:hover {
      padding: 4px;
    }
  } */
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
          className="social_buttons"
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Github
            className="Github_icon"
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          className="social_buttons"
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Facebook
            className="facebook_icon"
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          className="social_buttons"
          to={{ pathname: "https://github.com" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Twitter
            className="linkedin_icon"
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          className="social_buttons"
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
