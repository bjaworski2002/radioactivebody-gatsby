import React, { useEffect } from "react"
import { createTheme } from "styled-breakpoints"
import SEO from "../Components/SEO"
import { ThemeProvider } from "styled-components"
import Header from "../Components/Header"
import BreakLine from "../Components/BreakLine"
import ContactPanel from "../Components/ContactPanel"
import Footer from "../Components/Footer"
import SubPageTrainers from "../Components/SubpageTrainers"
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import AOS from "aos"
import "aos/dist/aos.css";

const theme = createTheme({
  xxs: '0px',
  xs: '380px',
  sm: '480px',
  md: '780px',
  lg: '960px',
  xl: '1340px',
})

export default function Home({data}) {
  const [id] = useQueryParam("id", NumberParam)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div style={{width: '100%', overflow: "hidden"}}>
      <SEO />
      {/*Themeprovider ustawiający breakpointy dla styled-components*/}
      <ThemeProvider theme={theme}>
        <Header/>
        <SubPageTrainers id={id} />
        <BreakLine reverse={false} />
        <ContactPanel />
        <Footer />
      </ThemeProvider>
    </div>
  )
}