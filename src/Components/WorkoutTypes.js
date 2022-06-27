import styled from "styled-components"
import { up, down, between, only } from "styled-breakpoints"
import Carousel, { consts } from "react-elastic-carousel"
import WorkoutItem from "./WourkOut/WorkoutItem"
import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 790, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1600, itemsToShow: 4 }
]
const WorkoutTypes = ({ data }) => {
  const myArrow = function({ type, onClick, isEdge }) {
    const pointer2 = type === consts.PREV ?
      <ArrowsCont><StaticImage src={"../assets/arrow-left.svg"} alt={"👈"} /></ArrowsCont>
      : <ArrowsCont><StaticImage src={"../assets/arrow-right.svg"} alt={"👉"} /></ArrowsCont>
    return (
      <NavButton onClick={onClick} disabled={isEdge}>
        {pointer2}
      </NavButton>)
  }
  return (
    <StaticQuery query={query} render={data =>
      <Section>
        <Carousel renderArrow={myArrow} breakPoints={breakPoints} disableArrowsOnEnd={true}
          /*style={{ overflow: "visible", backgroundColor: "red" }}*/>
          {data.allStrapiTrenings.nodes[0].data.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).map((e, index) => <WorkoutItem data={e.attributes} key={index} />)}
        </Carousel>
      </Section>
    } />
  )
}
export default WorkoutTypes
export const query = graphql`
  query MyQuery {
    allStrapiTrenings {
      nodes {
        id
        data {
          id
          attributes {
            nazwa
            opis
            zawartosc {
              wartosc
            }
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
const Section = styled.section`
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 6rem;

  ${down("md")} {
    padding: 0 0.5rem;
  }
`
const NavButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`
const ArrowsCont = styled.div`
  ${down("sm")}{
    width: 1rem;
  }
`
