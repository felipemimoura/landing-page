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
import { LandingPageProps, LogoProps } from 'types/api'

type Teste = {
  landingPage: {
    data: {
      attributes: {
        logo: {
          data: {
            attributes: LogoProps
          }
        }
      }
    }
  }
}

const Index = ({ logo }: LandingPageProps) => {
  return (
    <>
      <SectionHero logo={logo} />
      <SectionAboutProject />
      <SectionTech />
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
  console.log(logo)

  const teste: LandingPageProps = {
    logo: logo
  }

  return {
    props: {
      ...teste
    }
  }
}
export default Index
