import React from 'react';
import Header from "../Components/Header";
import LandingPage from "../Components/LandingPage";
import {ThemeProvider} from "styled-components";
import {createTheme} from "styled-breakpoints";
import AboutUs from "../Components/AboutUs";
import BreakLine from "../Components/BreakLine";
import OurTrainings from "../Components/OurTrainings";
import WorkoutTypes from "../Components/WorkoutTypes";
import {StaticQuery} from "gatsby"
import '../styles/globals.css'
const theme = createTheme({
  xxs: '0px',
  xs: '380px',
  sm: '480px',
  md: '780px',
  lg: '960px',
  xl: '1340px',
})

export default function Home({data}) {
  return (
    <div>
      {/*<Head>
        <title>RadioActiveBody</title>
        <meta name="description" content="RadioActiveBody to ekskluzywne studio treningów personalnych, które mieści się w centrum Starego Podgórza w Krakowie." />
        <link rel="icon" href="/favicon.ico" />
      </Head>*/}
      {/*Themeprovider ustawiający breakpointy dla styled-components*/}
      <ThemeProvider theme={theme}>
        <Header/>
        <LandingPage />
        <AboutUs />
        <BreakLine reverse={false} />
        <OurTrainings />
        <WorkoutTypes />
        <BreakLine reverse={true} />
      </ThemeProvider>
    </div>
  )
}
