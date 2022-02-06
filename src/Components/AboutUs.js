import styled from "styled-components";
import {up, down, between, only} from 'styled-breakpoints';
import Button from "./Button";
import {SubTitle, SubText} from "../styles/globalStyled"
import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
export default function AboutUs(props) {
    return (
        <Container id={"aboutUs"}>
            {/*Tekst panelu po lewej stronie. Możliwość zmiany na tekst pobierany z CMS-a*/}
            <Left>
                <SubTitle>Kim jesteśmy?</SubTitle>
                <SubText>RadioActiveBody to ekskluzywne studio treningów personalnych, które mieści się w centrum
                    Starego Podgórza w Krakowie.</SubText>
                <SubText>Tu znajdziesz spokój, intymność, przyjazną atmosferę, gdzie z nami będziesz mógł realizować
                    swoje cele!</SubText>
                <SubText last>Każde z nas ma inną historię, każdy z nas zaczynał inaczej, ale stworzyliśmy razem zespół
                    ludzi z pasją.
                    Powstało studio treningów personalnych jedyne w swoim rodzaju! Jako team dążymy do perfekcji i
                    najwyższych kwalifikacji.
                    To jest to, co nas odróżnia.</SubText>
                <Button target={"ourTrainings"} text={"Zobacz naszą ofertę!"} size={24}/>
            </Left>
            {/*Zdjęcie oraz efekt svg*/}
            <Right>
                <ImageCont>
                  <img
                    alt=""
                    src={`${process.env.STRAPI_IMAGE_URL}/medium_o_nas_984bf4dcc0.png`}
                  />
                    {/*<Image src={"/medium_o_nas_984bf4dcc0.png"} layout={"fill"} objectFit={"cover"}
                           objectPosition={"bottom center"}/>*/}
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
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 60%);
  width: 21rem;
  height: 28rem;
  * {
    position: relative;
    width: 100%;
    object-fit: cover;
    object-position: bottom center;
  }

  ${down("sm")} {
    width: 18rem;
    height: 26rem;
  }
`
const SvgCont = styled.div`
  position: absolute;
  transform: translateY(13rem) translateX(2rem);

  ${down("sm")} {
    transform: translateY(9rem) translateX(1rem);
  }
`