import React from 'react';
import Header from "../Components/Header";
import LandingPage from "../Components/LandingPage";
import {ThemeProvider} from "styled-components";
import {createTheme} from "styled-breakpoints";
import AboutUs from "../Components/AboutUs";
import BreakLine from "../Components/BreakLine";
import OurTrainings from "../Components/OurTrainings";
import WorkoutTypes from "../Components/WorkoutTypes";
import MeetUs from "../Components/MeetUs"
import TrainersList from "../Components/TrainersList"
import {StaticQuery} from "gatsby"
import '../styles/globals.css'
import ContactPanel from "../Components/ContactPanel"
import Footer from "../Components/Footer"
import SEO from "../Components/SEO"

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
    <div style={{width: '100%', overflow: "hidden"}}>
      <SEO />
      {/*Themeprovider ustawiający breakpointy dla styled-components*/}
      <ThemeProvider theme={theme}>
        <Header/>
        <LandingPage />
        <AboutUs />
        <BreakLine reverse={false} />
        <OurTrainings />
        <WorkoutTypes />
        <BreakLine reverse={true} />
        <MeetUs />
        <TrainersList />
        <BreakLine reverse={false} />
        <ContactPanel />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
