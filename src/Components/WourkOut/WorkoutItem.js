import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { up, down, between, only } from "styled-breakpoints"
import Button from "../Button"
import { StaticImage } from "gatsby-plugin-image"

export default function WorkoutItem(props) {
  useEffect(() => {
    console.log(`${process.env.STRAPI_API_URL}${props.data.image.data[0].attributes.url}`)
  }, [])
  return (
    <Container data-aos="fade-left">
      <ArrowsCont>
        <StaticImage src={"../../assets/Strzalki2.svg"} alt={""} objectFit={"contain"}/>
      </ArrowsCont>
      <LinesCont>
        <StaticImage src={"../../assets/Kreski.svg"} alt={""} />
      </LinesCont>
      <ButtonCont>
        <Button target={"contact"} text={"Zacznij już dziś!"} size={18} />
      </ButtonCont>
      <WorkOutImg
        alt=""
        src={`${props.data.image.data[0].attributes.url}`}
      />
      <Title>{props.data.nazwa}</Title>
      <Paragraph>{props.data.opis}</Paragraph>
      <SubTitle>Zawiera:</SubTitle>
      {props.data.zawartosc.map((e, index) => <Paragraph key={index}>{e.wartosc}</Paragraph>)}
    </Container>
  )
}
const Container = styled.div`
  background-color: #353535;
  color: white;
  width: 23rem;
  height: 42rem;
  padding: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1.5rem;
  overflow: visible;
  z-index: 1;

  * {
    margin-bottom: 0.4rem;
  }

  ${down("md")} {
    width: 18rem;
    padding: 1.5rem 1rem 5rem;
    overflow: hidden;
  }

  ${down("sm")} {
    width: 16rem;
    height: 40rem;
  }
`
const WorkOutImg = styled.img`
  border-radius: 0.5rem;
  width: 100%;
`
const Title = styled.h2`
  font-weight: 600;
`
const SubTitle = styled.h3`
`
const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  ${down('md')}{
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
`
const ArrowsCont = styled.div`
  top: 0;
  position: absolute;
  width: 3rem;
`
const LinesCont = styled.div`
  bottom: -3rem;
  margin-left: 12.7rem;
  width: 9.5rem;
  position: absolute;
  ${down("md")}{
    display: none;
  }
`
const ButtonCont = styled.div`
  position: absolute;
  bottom: 0.5rem;
`
