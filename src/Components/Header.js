import React, {useState} from "react";
import styled, {css} from "styled-components";
import Logo from "../assets/Logo.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { up, down, between, only } from 'styled-breakpoints';
import {StaticImage} from "gatsby-plugin-image"

export default function Header(props){
    /*State odpowiadający za aktywne menu hamburgerowe*/
    const [active, setActive] = useState(false)
    return(<Container>
            <Left>
                <a href={"#"}><StaticImage src={"../assets/Logo.svg"} alt={"RadioActiveBody"}/></a>
            </Left>
            {/*Hiperłącza headera dostępne przy szerokościach lg i większych*/}
            <Right>
                <Href href={"#"} >O nas</Href>
                <Href href={"#"} >Oferta</Href>
                <Href href={"#"} >Trenerzy</Href>
                <Href href={"#"} >Kontakt</Href>
                <Href href={"#"} icon><FontAwesomeIcon style={{height: '2rem'}} icon={faFacebookSquare} /></Href>
                <Href href={"#"} icon><FontAwesomeIcon style={{height: '2rem'}} icon={faInstagram} /></Href>
            </Right>
            {/*Wysuwane menu dostępne przy szerokościach mniejszych niż lg*/}
            <Hamburger onClick={() => setActive(!active)}>
                <HamburgerBox>
                    <HamburgerInner active={active}/>
                </HamburgerBox>
            </Hamburger>
            <Navigation active={active}>
                <Href href={"#"} menu>O nas</Href>
                <Href href={"#"} menu>Oferta</Href>
                <Href href={"#"} menu>Trenerzy</Href>
                <Href href={"#"} menu>Kontakt</Href>
                <Href href={"#"} menu icon><FontAwesomeIcon style={{height: '2rem'}} icon={faFacebookSquare} /></Href>
                <Href href={"#"} menu icon><FontAwesomeIcon style={{height: '2rem'}} icon={faInstagram} /></Href>
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
  ${down('md')} {
    display: none;
  }
`
const Href = styled.a`
  height: 2rem;
  font-size: 1.5rem;
  margin-right: ${props => props.icon ? `1rem` : `1.5rem`};
  margin-bottom: ${props => props.menu ? `0.7rem` : `0`};
  color: white;
  white-space: nowrap;
  font-weight: 800;
`
const Hamburger = styled.div`
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  margin: 0.5rem 1rem;
  ${up('md')} {
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
  background-color: ${props => (props.active ? 'transparent' : 'white')};
  &::before{
    ${HamburgerLine};
    top: -0.625rem;
    content: ' ';
    transform: ${props => (props.active ? 'translateY(0.625rem) rotate(+45deg)' : 'none')};
  }
  &::after{
    ${HamburgerLine};
    top: 0.625rem;
    content: ' ';
    transform: ${props => (props.active ? 'translateY(-0.625rem) rotate(-45deg)' : 'none')};
  }
`
const Navigation = styled.div`
  height: 100%;
  width: 18.75rem;
  background: linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0.67) 90%, rgba(0,0,0,0) 100%);
  position: fixed;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  transition: all 0.2s;
  z-index: 2;
  transform: ${props => (props.active ? 'none' : 'translateX(-18.75rem)')};
  ${up('md')} {
    display: none;
  }
`