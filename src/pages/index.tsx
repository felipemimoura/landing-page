import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import {
  HeaderProps,
  LandingPageProps,
  LogoProps,
  SectionAboutProjectProps,
  SectionTechProps
} from 'types/api'

type Teste = {
  landingPage: {
    data: {
      attributes: {
        logo: {
          data: {
            attributes: LogoProps
          }
        }
        header: HeaderProps
        sectionAboutProject: SectionAboutProjectProps
        sectionTech: SectionTechProps
      }
    }
  }
}

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech
}: LandingPageProps) => {
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts />
      <SectionModules />
      <SectionAgenda />
      <PricingBox />
      <SectionAboutUs />
      <SectionReviews />
      <SectionFaq />
      <Footer />
      <JsonSchema />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<Promise<Teste>>(GET_LANDING_PAGE)
  const logo = landingPage.data.attributes.logo.data.attributes
  const header = landingPage.data.attributes.header
  const sectionAboutProject = landingPage.data.attributes.sectionAboutProject
  const sectionTech = landingPage.data.attributes.sectionTech

  const teste: LandingPageProps = {
    logo: logo,
    header: header,
    sectionAboutProject: sectionAboutProject,
    sectionTech: sectionTech
  }

  return {
    props: {
      ...teste
    }
  }
}
export default Index
