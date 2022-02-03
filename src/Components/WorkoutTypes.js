import styled from "styled-components";
import {up, down, between, only} from 'styled-breakpoints';
import Carousel from 'react-elastic-carousel';
import WorkoutItem from "./WourkOut/WorkoutItem";
import React from 'react';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1600, itemsToShow: 4 },
];
export default function WorkoutTypes(){
    return (
        <Section>
            <Carousel breakPoints={breakPoints} style={{overflow: 'visible'}}>
                <WorkoutItem />
                <WorkoutItem />
                <WorkoutItem />
                <WorkoutItem />
            </Carousel>
        </Section>
    )
}
const Section = styled.section`
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 6rem;
`