import styled from "styled-components"
import { up, down, between, only } from "styled-breakpoints"
import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import SingleTrainer from "./Trainers/SingleTrainer"

const TrainersList = () => {
  return (
    <StaticQuery query={query} render={data =>
      <Section>
        {data.allStrapiTreners.nodes[0].data.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).map((e, index) => <SingleTrainer index={index} data={e} showButtons={true} />)}
      </Section>
    } />
  )
}
export default TrainersList
export const query = graphql`
query TrainersQuery {
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
  margin-bottom: 6rem;

  ${down("md")} {
    padding: 0 0.5rem;
  }
`
