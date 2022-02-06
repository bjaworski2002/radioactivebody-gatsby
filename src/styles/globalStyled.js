import styled from "styled-components"
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
  font-size: 1.55rem;
  line-height: 1.8rem;

  ${down("xl")} {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  ${down("sm")} {
    font-size: 1.25rem;
    line-height: 1.4rem;
  }

  font-weight: 200;
  padding-bottom: ${props => props.last ? `0.5rem` : `0`};
`