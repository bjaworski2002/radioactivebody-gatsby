import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll"
export default function Button(props){
    return (
      <Link to={props.target} smooth={true} duration={500}>
        <StyledButton style={{fontSize: props.size + 'px'}} onClick={props.action}>
            {props.text}
        </StyledButton>
      </Link>
    )
}
const StyledButton = styled.button`
  padding: 0.5em 1em;
  border: 0;
  font-weight: 800;
  border-radius: 1em;
  color: black;
  background-color: #FFDA54;
  transition: 0.2s;
  opacity: 0.8;
  :hover{
    opacity: 1;
    cursor: pointer;
  }
`