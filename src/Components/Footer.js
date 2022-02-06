import styled from "styled-components"
import React from "react"
export default function Footer(){
  return (
    <FooterCont>
      <span>© 2022 RadioActiveBody. Design i wykonanie Bartosz Jaworski.</span>
      <span><b>Kliknij, aby wrócić na górę strony!</b></span>
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
