import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaGoogleDrive} from 'react-icons/fa'
import styled from "styled-components"

const Icons = styled.div`
display:flex;
align-items:center;
gap: 5px;
& a {
    font-size: 21px;
    text-decoration: none;
    color:black;
}`

function Icon(props) {
    return (
      <Icons>
        <a href={props.linkedin} target="_blank">
          <FaLinkedin />
        </a>

        <a href={props.skype} target="_blank">
          <FaSkype />
        </a>

        <a href={props.codepen} target="_blank">
          <FaCodepen />
        </a>

        <a href={props.github} target="_blank">
          <FaGithub />
        </a>
      </Icons>
    );
}

export default Icon
