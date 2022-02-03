import styled from "styled-components";
import {up, down, between, only} from 'styled-breakpoints';
import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
export default function OurTrainings(props) {
    return (
        <Container>
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
                    src={`${process.env.STRAPI_IMAGE_URL}/oferta_1890af6d70.png`}
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

  ${down("sm")} {
    width: 20rem;
  }

`
const SubTitle = styled.h2`
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
const SubText = styled.p`
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
    width: 100%;
    object-fit: cover;
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