import styled from "styled-components";
import React from 'react';
import {up, down, between, only} from 'styled-breakpoints';
//import Arrows from "../../assets/Strzalki2.svg"
//import Lines from "../../assets/Kreski.svg"
import Button from "../Button";
import {StaticImage} from "gatsby-plugin-image"

export default function WorkoutItem(props){
    return (
            <Container>
                <ArrowsCont>
                    <StaticImage src={"../../assets/Strzalki2.svg"} alt={""}/>
                </ArrowsCont>
                <SvgContainer>
                  <StaticImage src={"../../assets/Kreski.svg"} alt={""}/>
                </SvgContainer>
                <span>image</span>
                <Title>title</Title>
                <p>paragraph</p>
                <SubTitle>subtitle</SubTitle>
                <Paragraph>p1</Paragraph>
                <Paragraph>p2</Paragraph>
                <Paragraph>p3</Paragraph>
                <Button text={"Zacznij już dziś!"} size={18} />
            </Container>
    )
}
const Container = styled.div`
  background-color: #353535;
  width: 23rem;
  height: 42rem;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1.5rem;
  overflow: visible;
  z-index: 1;
`
const WorkOutImg = styled(Image)``
const Title = styled.h2``
const SubTitle = styled.h3``
const Paragraph = styled.p``
const ArrowsCont = styled.div`
  top: 0;
  position: absolute;
`
const SvgContainer = styled.div`
  bottom: -1rem;
  transform: translateX(11rem);
  position: absolute;
`