import styled, { keyframes } from "styled-components"
import { down } from "styled-breakpoints"

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: white;
  margin-bottom: 2rem;

  &::before {
    border-left: 0.5rem solid #FFDA54;
    content: "";
    padding-right: 1rem;
  }
`
export const SubText = styled.p`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  line-height: 1.7rem;

  ${down("xl")} {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  ${down("sm")} {
    font-size: 1.25rem;
    line-height: 1.4rem;
  }

  font-weight: 300;
  padding-bottom: ${props => props.last ? `0.5rem` : `0`};
`
export const Appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const AppearFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
export const AppearFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`