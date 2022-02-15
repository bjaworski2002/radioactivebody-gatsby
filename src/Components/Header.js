import React, { useState } from "react"
import styled, { css } from "styled-components"
import Logo from "../assets/Logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { up, down, between, only } from "styled-breakpoints"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "react-scroll"

export default function Header() {
  /*State odpowiadający za aktywne menu hamburgerowe*/
  const [active, setActive] = useState(false)
  return (<Container>
    <Left>
      <Link to={"landingPage"} smooth={true} duration={500}><StaticImage src={"../assets/Logo.svg"}
                                                                         alt={"RadioActiveBody"} /></Link>
    </Left>landingPage
    {/*Hiperłącza headera dostępne przy szerokościach lg i większych*/}
    <Right>
      <Href to={"aboutUs"} smooth={true} duration={500}>O nas</Href>
      <Href to={"ourTrainings"} smooth={true} duration={500}>Oferta</Href>
      <Href to={"coaches"} smooth={true} duration={500}>Trenerzy</Href>
      <Href to={"contact"} smooth={true} duration={500}>Kontakt</Href>
      <AHref href={"https://www.facebook.com/RadioactiveBody/"} rel={"external"} target={"_blank"} icon><FontAwesomeIcon
        style={{ height: "2rem" }} icon={faFacebookSquare} /></AHref>
      <AHref href={"https://www.instagram.com/radioactivebody/"} rel={"external"} target={"_blank"} icon><FontAwesomeIcon
        style={{ height: "2rem" }} icon={faInstagram} /></AHref>
    </Right>
    {/*Wysuwane menu dostępne przy szerokościach mniejszych niż lg*/}
    <Hamburger onClick={() => setActive(!active)}>
      <HamburgerBox>
        <HamburgerInner active={active} />
      </HamburgerBox>
    </Hamburger>
    <Navigation active={active}>
      <Href to={"aboutUs"} smooth={true} duration={500} menu>O nas</Href>
      <Href to={"ourTrainings"} smooth={true} duration={500} menu>Oferta</Href>
      <Href to={"coaches"} smooth={true} duration={500} menu>Trenerzy</Href>
      <Href to={"contact"} smooth={true} duration={500} menu>Kontakt</Href>
      <AHref href={"https://www.facebook.com/RadioactiveBody/"} rel={"external"} target={"_blank"} icon menu><FontAwesomeIcon
        style={{ height: "2rem" }} icon={faFacebookSquare} /> <span>Facebook</span></AHref>
      <AHref href={"https://www.instagram.com/radioactivebody/"} rel={"external"} target={"_blank"} icon menu><FontAwesomeIcon
        style={{ height: "2rem" }} icon={faInstagram} /> <span>Instagram</span></AHref>
    </Navigation>
  </Container>)
}
const Container = styled.header`
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  background: linear-gradient(180deg, #000000 55.94%, rgba(0, 0, 0, 0) 100%);
`
const Left = styled.div`
  height: 90%;
  margin: 0.7rem;
  width: 11rem;
`
const Right = styled.div`
  height: 100%;
  margin: 1rem;
  display: flex;

  ${down("md")} {
    display: none;
  }
`
const HrefCss = css`
  height: 2rem;
  font-size: 1.5rem;
  margin-right: ${props => props.icon ? `1rem` : `1.5rem`};
  margin-bottom: ${props => props.menu ? `0.7rem` : `0`};
  color: white;
  white-space: nowrap;
  font-weight: 800;
  transition: 0.2s;

  :hover {
    color: #FFDA54;
    cursor: pointer;
  }
`
const Href = styled(Link)`${HrefCss}`
const AHref = styled.a`
  ${HrefCss};
  span{
    margin-left: 0.4rem;
    position: relative;
    top: -0.2rem;
  }
`
const Hamburger = styled.div`
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  margin: 0.5rem 1rem;

  ${up("md")} {
    display: none;
  }
`
const HamburgerBox = styled.span`
  width: 2.5rem;
  height: 2rem;
  display: inline-block;
  position: relative;
`
// kształt i kolor kreski
const HamburgerLine = css`
  width: 100%;
  height: 0.25rem;
  left: 0;
  position: absolute;
  background-color: white;
  transition: all 0.2s;
`
// generacja trzech kresek i ich animacji
const HamburgerInner = styled.span`
  ${HamburgerLine};
  top: 50%;
  background-color: ${props => (props.active ? "transparent" : "white")};

  &::before {
    ${HamburgerLine};
    top: -0.625rem;
    content: ' ';
    transform: ${props => (props.active ? "translateY(0.625rem) rotate(+45deg)" : "none")};
  }

  &::after {
    ${HamburgerLine};
    top: 0.625rem;
    content: ' ';
    transform: ${props => (props.active ? "translateY(-0.625rem) rotate(-45deg)" : "none")};
  }
`
const Navigation = styled.div`
  height: 100%;
  width: 18.75rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 0) 100%);
  position: fixed;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  transition: all 0.2s;
  z-index: 2;
  transform: ${props => (props.active ? "none" : "translateX(-18.75rem)")};

  ${up("md")} {
    display: none;
  }
`