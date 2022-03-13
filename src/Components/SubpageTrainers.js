import styled from "styled-components"
import { up, down, between, only } from "styled-breakpoints"
import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import SingleTrainer from "./Trainers/SingleTrainer"
import { SubTitle } from "../styles/globalStyled"

const SubPageTrainers = (props) => {
  return (
    <StaticQuery query={query} render={data =>
      <Section>
        <HeaderTitle>Poznaj naszych trenerów!</HeaderTitle>
        <Hr />
        {data.allStrapiTreners.nodes[0].data.filter(e => e.id === props.id).map((e, index) => <SingleTrainer index={index} data={e} />)}
      </Section>
    } />
  )
}
export default SubPageTrainers
export const query = graphql`
query TrainersQuery2 {
  allStrapiTreners {
    nodes {
      data {
        attributes {
          imie
          nazwisko
          opis
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }
}

`
const Section = styled.section`
  width: 100%;
  padding: 0 5%;
  flex-direction: row;
  margin: 6rem auto;
  ${down("md")} {
    padding: 0 0.5rem;
  }
`
const HeaderTitle = styled(SubTitle)`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  &::before {
    border-left: 0;
    content: "";
  }
  
`
const Hr = styled.hr`
  width: min(40rem, 90%);
  margin: 0 auto 2rem;
  color: #FFDA54;
  border-bottom: 0.5rem solid #FFDA54;
`