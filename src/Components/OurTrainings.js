import styled from "styled-components";
import {up, down, between, only} from 'styled-breakpoints';
import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
import {SubTitle, SubText} from "../styles/globalStyled"

export default function OurTrainings(props) {
    return (
        <Container data-aos="fade-right" id={"ourTrainings"}>
            {/*Tekst panelu po prawej stronie. Możliwość zmiany na tekst pobierany z CMS-a*/}
            <Left>
                <SubTitle>Nasze treningi</SubTitle>
                <SubText>Naszym zadaniem jest dobór odpowiedniej
                    metody treningowej, terapii, planu żywieniowego
                    do indywidualnych potrzeb i możliwości klienta.</SubText>
                <SubText>W naszej ofercie znajdą Państwo wszystko to,
                    co pomoże w osiągnięciu celu!</SubText>
            </Left>
            {/*Zdjęcie oraz efekt svg*/}
            <Right>
                <ImageCont>
                  <img
                    alt=""
                    src={"https://res.cloudinary.com/dcmlieuld/image/upload/v1649088993/small_oferta_ba9a865c18.jpg"}
                  />
                </ImageCont>
                <SvgCont>
                    <StaticImage src={"../assets/AboutUsVector.svg"} alt={""}/>
                </SvgCont>
            </Right>
        </Container>
    )
}
const Container = styled.section`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  ${down("lg")} {
    flex-direction: column-reverse;
    text-align: center;
  }
`
const Left = styled.div`
  width: 42rem;
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
  width: 28rem;
  height: 25rem;
  margin-bottom: 4rem;
  
  ${down("sm")} {
    margin-bottom: 0;
    width: 20rem;
  }
`
const ImageCont = styled.div`
  position: absolute;
  width: 22rem;
  height: 22rem;
  * {
    position: relative;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    object-fit: fill;
    object-position: bottom center;
  }
  ${down("sm")} {
    width: 19rem;
    height: 19rem;
  }
`
const SvgCont = styled.div`
  position: absolute;
  transform: translateY(13rem) translateX(6rem);

  ${down("sm")} {
    transform: translateY(9rem) translateX(3rem);
  }
`