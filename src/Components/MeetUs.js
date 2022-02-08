import styled from "styled-components";
import {up, down, between, only} from 'styled-breakpoints';
import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
import {SubTitle, SubText} from "../styles/globalStyled"

export default function MeetUs(props) {
    return (
        <Container id={"coaches"}>
            {/*Tekst panelu po lewej stronie. Możliwość zmiany na tekst pobierany z CMS-a*/}
            <Left>
                <SubTitle>Poznaj nas!</SubTitle>
                <SubText>RadioActiveBody to sztab gruntownie
                  wykształconych i wykwalifikowanych
                  specjalistów w dziedzinie zdrowia
                  i kondycji fizycznej.</SubText>
                <SubText>Działają w różnych dziedzinach sportu,
                  rehabilitacji, dietetyki czy suplementacji
                  po to, aby wspólnie tworzyć najlepsze
                  plany treningowe właśnie dla Ciebie.</SubText>
            </Left>
            {/*Zdjęcie oraz efekt svg*/}
            <Right>
                <ImageCont>
                  <img
                    alt=""
                    src={`${process.env.STRAPI_IMAGE_URL}/large_trenerzy_9624ed46e2.png`}
                  />
                    {/*<Image src={"/medium_o_nas_984bf4dcc0.png"} layout={"fill"} objectFit={"cover"}
                           objectPosition={"bottom center"}/>*/}
                </ImageCont>
                <SvgCont>
                  <StaticImage src={"../assets/circle.svg"} alt={""}/>
                </SvgCont>
            </Right>
        </Container>
    )
}
const Container = styled.section`
  width: 100%;
  margin: 6rem 0 5rem;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${down("lg")} {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
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
  width: 30rem;
  height: 22rem;
  margin-bottom: 4rem;
  
  ${down("xl")} {
    width: 25rem;
    height: 20rem;
    margin-left: 2.5rem;
  }
  
  ${down("lg")} {
    margin-left: 0;
    margin-bottom: 8rem;
    width: 30rem;
    height: 22rem;
  }
  ${down("md")} {
    width: 25rem;
    height: 20rem;
    margin-left: 0;
    margin-bottom: 8rem;
   }
  ${down("sm")} {
    width: calc(100% - 2rem);
    height: 20rem;
    margin-bottom: 4rem;
  }
`
const ImageCont = styled.div`
  
  position: relative;
  width: 100%;
  height: 100%;
  * {
    border-radius: 2rem;
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
  }
  
`
const SvgCont = styled.div`
  position: absolute;
  top: 50%;
  left: -2rem;
  z-index: 1;
  ${down("sm")} {
    display: none;
  }
`