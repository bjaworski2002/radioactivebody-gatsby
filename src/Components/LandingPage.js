import styled from "styled-components";
import React, { useEffect } from "react"
import {up, down, between, only} from 'styled-breakpoints';
import {Appear} from "../styles/globalStyled"
import Button from "./Button";
export default function LandingPage() {
    return (
        <Section data-aos="fade-right" id={"landingPage"}>
            {/*OuterCont - Kontener o wysokości i szerokości screena. Użyty do zastosowania flexa*/}
            <OuterCont>
                {/*InnerCont - panel z napisami oraz przyciskami*/}
                <InnerCont data-aos="zoom-in">
                    <TitleText>Treningi Personalne</TitleText>
                    <SubText>Dopasowane do twoich potrzeb</SubText>
                    <ButtonContainer>
                        <Button target={"aboutUs"} text={"Poznaj nas!"} size={24}/>
                        <Button target={"ourTrainings"} text={"Sprawdź!"} size={24}/>
                    </ButtonContainer>
                </InnerCont>
            </OuterCont>
            {/*Gradient widoczny przy przescrolowaniu w dół.*/}
            <OuterGradient />
            {/*Style odpowiedzialne za wyblurowane zdjęcie w tle*/}
            <Background>
              <BackgroundImage>
                <img
                  alt=""
                  src={`https://res.cloudinary.com/dcmlieuld/image/upload/v1644575100/large_tytul1_76feb15deb.png`}
                />
              </BackgroundImage>
            </Background>
        </Section>)
}
const Section = styled.section`
  width: 100%;
  height: 100vh;
`
const OuterCont = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`
const OuterGradient = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  height: 3rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`
const InnerCont = styled.div`
  width: min(850px, 90%);
  margin-left: 5%;
  margin-bottom: max(5%, 40px);
  * {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`
const TitleText = styled.h1`
  color: white;
  font-size: 5rem;
  line-height: 6rem;
  font-weight: 800;
  font-family: 'Red Hat Display', sans-serif;
  //text-shadow: #000000 1px 0 10px;
  ${down('lg')} {
    font-size: 4rem;
    line-height: 4.5rem;
  }
  ${down('sm')} {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`
const SubText = styled.h2`
  color: white;
  font-size: 3.5rem;
  font-weight: 400;
  font-family: 'Red Hat Display', sans-serif;
  ${down('md')} {
    font-size: 3rem;
  }
  ${down('sm')} {
    font-size: 2.5rem;
  }
`
const ButtonContainer = styled.span`
  * {
    margin-right: 1rem;
  }
`
const Background = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #303030;
`
const BackgroundImage = styled.div`
  position: relative;
  width: 102%;
  height: 102%;
  filter: blur(2px);
  * {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`