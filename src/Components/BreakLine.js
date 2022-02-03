import React from 'react';
import styled from "styled-components";
export default function BreakLine(props){
    return (
            <StyledHr reverse={props.reverse} noshade />
    )
}
const StyledHr = styled.hr`
  color: #FFDA54;
  width: 100%;
  fill: #FFDA54;
  opacity: 0.5;
  border-top: 12px solid #FFDA54;
  transform: ${props => props.reverse ? `rotate(2.57deg)` : `rotate(-2.57deg)`};
`