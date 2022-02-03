import React from "react";
import styled from "styled-components";
export default function Button(props){
    return (
        <StyledButton style={{fontSize: props.size + 'px'}}>
            {props.text}
        </StyledButton>
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