import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { up, down, between, only } from "styled-breakpoints"
import { SubTitle, SubText } from "../styles/globalStyled"
import emailjs from '@emailjs/browser';
import Button from "./Button"

const ContactPanel = () => {
  const [form, setForm] = useState({
    title: "",
    mail: "",
    phone: "",
    text: ""
  })
  const ChangeInputValue = (e) => {
      setForm({...form, [e.target.id]: e.target.value})
      console.log(form)
  }
  const sendEmail = () => {
    console.log(form)
    emailjs.sendForm()
  }
  return (<StaticQuery query={query} render={data =>
    <Section data-aos="fade-right" id={"contact"}>
      <ImgCont>
        <img
          alt=""
          src={`https://res.cloudinary.com/dcmlieuld/image/upload/v1647195961/Przechwytywanie_25d5312950.png`}
        />
      </ImgCont>
      <FormCont>
        <FormSubTitle>Skontaktuj się z nami!</FormSubTitle>
        <hr />
        <SubText>Zadzwoń pod numer <b><i>{data.strapiDane.data.attributes.Telefon}</i></b>, przyjdź pod
          adres <b><i>{data.strapiDane.data.attributes.Adres}</i></b></SubText>
        <SubText><b><i>Lub napisz do nas!</i></b></SubText>
        <Form>
          <label htmlFor={"title"}><b><i>Tytuł maila:</i></b></label>
          <input type={"text"} id={"title"} placeholder={"Tytuł maila"} value={form.title} onChange={(e) => ChangeInputValue(e)}/>

          <label htmlFor={"mail"}><b><i>Adres e-mail nadawcy:</i></b></label>
          <input type={"email"} id={"mail"} placeholder={"Adres e-mail nadawcy"} onChange={(e) => ChangeInputValue(e)}/>

          <label htmlFor={"phone"}><b><i>Numer telefonu nadawcy:</i></b></label>
          <input type={"number"} id={"phone"} placeholder={"Numer telefonu nadawcy"} onChange={(e) => ChangeInputValue(e)}/>

          <label htmlFor={"text"}><b><i>Treść maila:</i></b></label>
          <textarea cols={"10"} rows={"10"} id={"text"} placeholder={"Treść maila"} onChange={(e) => ChangeInputValue(e)}/>

          <Button size={18} text={"Wyślij!"} action={() => sendEmail()} />
        </Form>
      </FormCont>
    </Section>
  } />)
}
export default ContactPanel

export const query = graphql`
query Data {
  strapiDane {
    data {
      attributes {
        Adres
        Email
        Telefon
      }
    }
  }
}
`
const Section = styled.section`
  width: 100%;
  padding: 0 5%;
  flex-direction: row;
  margin: 6rem 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${down("xl")} {
    flex-direction: column;
    justify-content: center;
  }
  ${down("md")} {
    padding: 0 0.5rem;
  }
`
const ImgCont = styled.div`
  width: 20rem;
  height: 20rem;
  margin-right: 1rem;
  ${up("lg")} {
    margin-right: 3rem;
  }
  *{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 42rem;

  * {
    margin-bottom: 1rem;
  }

  hr {
    position: relative;
    width: 120%;
    border-bottom: 0.5rem solid #FFDA54;

    ${down("lg")} {
      position: relative;
      width: 100%;
    }
  }

  ${down("lg")} {
    position: relative;
    width: 95%;
  }
`
const FormSubTitle = styled(SubTitle)`
  :before {
    padding-right: 0;
    border: 0;
  }
`
const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  input, textarea {
    min-height: 2.5rem;
    font-size: 1.1rem;
    border-radius: 1.25rem;
    position: relative;
    width: 80%;
    max-width: 80%;
    min-width: 80%;
    color: white;
    background-color: #464646;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 800;
    border: none;
    padding-left: 1.25rem;
    padding-top: 0.2rem;

    :focus {
      outline: none;
    }

    ${down("lg")} {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  }

  textarea {
    padding-top: 0.5rem;
    height: 10rem;
  }
`