import React, { useEffect } from "react"
import styled from "styled-components"
import { up, down, between, only } from "styled-breakpoints"
import { StaticImage } from "gatsby-plugin-image"
import {SubTitle, SubText} from "../../styles/globalStyled"

export default function SingleTrainer(props) {
  useEffect(() => {
    console.log(props.data.id)
  }, [])
  return (
    <MainCont isEven={props.index % 2 === 0}>
      <TextCont isEven={props.index % 2 === 0} data-aos={props.index % 2 === 0 ? "fade-left" : "fade-right"}>
        <SubTitle>{`${props.data.attributes.imie} ${props.data.attributes.nazwisko}`}</SubTitle>
        <SubText>{props.data.attributes.opis}</SubText>
        {props.showButtons ? <TrainerHref href={`/trainer?id=${props.data.id}`}>Dowiedz się więcej!</TrainerHref> : null}
      </TextCont>
      <ImageOuter isEven={props.index % 2 === 0}>
        <ImageCont>
          <img
            alt=""
            src={`${props.data.attributes.image.data.attributes.url}`}
          />
        </ImageCont>
      </ImageOuter>
    </MainCont>
  )
}
const MainCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: ${props => props.isEven ? `row-reverse` : `row`};
  ${down("lg")} {
    flex-direction: column-reverse;
  }
`
const TextCont = styled.div`
  width: 42rem;
  margin: 2rem;
  text-align: left;
  ${only("lg")} {
    margin-left: ${props => props.isEven ? `2rem` : `0`};
    margin-right: ${props => props.isEven ? `0` : `2rem`};
    width: 32rem;
  }
  ${down("lg")} {
    margin: 2rem;
    width: calc(100% - 4rem);
    text-align: center;
  }
  ${down("sm")} {
    margin: 2rem 0;
    width: calc(100% - 2rem);
  }
`
const ImageOuter = styled.div`
  position: relative;
  margin: 2rem;
  width: 22rem;
  height: 32rem;
  ${only("lg")}{
    margin-right: ${props => props.isEven ? `2rem` : `0`};
    margin-left: ${props => props.isEven ? `0` : `2rem`};
    width: 18rem;
    height: 26rem;
  }
  ${down("sm")}{
    width: calc(100% - 4rem);
    height: 100vw;
  }
`
const ImageCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`
const SvgCont = styled.div`
  position: absolute;
  top: 50%;
  transform: ${props => props.isEven ? `translateX(10%) translateY(15%)` : `translateX(-10%) translateY(15%) rotateY(180deg)`};;
`
const TrainerHref = styled.a`
  position: relative;
  top: 2rem;
  padding: 0.5em 1em;
  border: 0;
  font-size: 1.25rem;
  font-weight: 800;
  border-radius: 1em;
  color: black;
  background-color: #FFDA54;
  transition: 0.2s;
  opacity: 0.8;
  :hover{
    opacity: 1;
  }
`