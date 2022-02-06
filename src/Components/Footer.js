import styled from "styled-components"
import React from "react"
import {animateScroll as scroll} from 'react-scroll'
export default function Footer(){
  return (
    <FooterCont>
      <span>© 2022 RadioActiveBody. Design i wykonanie Bartosz Jaworski.</span>
      <a onClick={() => scroll.scrollToTop()}><b>Kliknij, aby wrócić na górę strony!</b></a>
    </FooterCont>
  )
}
const FooterCont = styled.footer`
  height: 4rem;
  background-color: #FFDA54;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  *{
    padding: 0.5rem;
    text-align: center;
  }
`
