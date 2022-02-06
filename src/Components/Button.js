import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll"
export default function Button(props){
    return (
      <Link to={props.target} smooth={true} duration={500}>
        <StyledButton style={{fontSize: props.size + 'px'}}>
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
  :hover{
    background-color: #DD9045;
  }
`