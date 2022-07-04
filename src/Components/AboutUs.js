import styled from "styled-components";
import {up, down, between, only} from 'styled-breakpoints';
import Button from "./Button";
import {SubTitle, SubText} from "../styles/globalStyled"
import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
export default function AboutUs(props) {
    return (
        <Container data-aos="fade-left" id={"aboutUs"}>
            {/*Tekst panelu po lewej stronie. Możliwość zmiany na tekst pobierany z CMS-a*/}
            <Left>
                <SubTitle>Kim jesteśmy?</SubTitle>
                <SubText>RadioActiveBody to studio ekskluzywnych treningów personalnych mieszczące się w centrum Starego Podgórza w Krakowie. Znajdziesz u nas wszystko to czego potrzebujesz – spokój, intymność i przyjazną atmosferę, dzięki której zrealizujesz każdy ze swoich celów! Członkowie naszego zespołu to osoby różnorodne, które łączy jedno – pełnia pasji. Dzięki naszym wspólnym staraniom utworzyliśmy studio jedyne w swoim rodzaju, którego kadra dąży do perfekcji i ciągłego podnoszenia swoich kwalifikacji. To właśnie chęć bycia najlepszymi w swoim fachu jest tym, co odróżnia nas od innych.</SubText>
                <Button target={"ourTrainings"} text={"Zobacz naszą ofertę"} size={24}/>
            </Left>
            {/*Zdjęcie oraz efekt svg*/}
            <Right>
                <ImageCont>
                  <img
                    alt=""
                    src={"https://res.cloudinary.com/dcmlieuld/image/upload/v1656875780/Bez_nazwy_1_eb0f915c11.png"}
                  />
                </ImageCont>
                <SvgCont>
                  <StaticImage src={"../assets/Kropki.svg"} alt={""}/>
                </SvgCont>
            </Right>
        </Container>
    )
}
const Container = styled.section`
  width: 100%;
  margin: 6rem 0 8rem;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${down("lg")} {
    flex-direction: column-reverse;
    text-align: center;
  }
`
const Left = styled.div`
  width: 42rem;
  //background-color: green;
  * {
    margin-bottom: 1.5rem;
  }

  ${down("xl")} {
    width: 30rem;
  }
  ${down("md")} {
    width: 28rem;
  }
  ${down("sm")} {
    width: calc(100% - 2rem);
  }
`
const Right = styled.div`
  position: relative;
  margin-left: 4rem;
  width: 22rem;
  height: 30em;
  margin-bottom: 4rem;

  ${down("lg")} {
    margin-left: 0;
  }
  
  ${down("sm")} {
    margin-bottom: 0;
    margin-left: 4rem;
  }
`
const ImageCont = styled.div`
  z-index: 1;
  position: absolute;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 80%);
  width: 24rem;
  height: 24rem;
  * {
    position: relative;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  ${down("sm")} {
    width: 20rem;
    height: 20rem;
  }
`
const SvgCont = styled.div`
  position: absolute;
  transform: translateY(13rem) translateX(2rem);

  ${down("sm")} {
    transform: translateY(9rem) translateX(1rem);
  }
`