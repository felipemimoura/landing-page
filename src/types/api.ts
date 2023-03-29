export type TechIcon = {
  title: string
  icon: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}
export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        name: string
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type SectionConceptsProps = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type SectionTechProps = {
  title: string
  techIcon: TechIcon[]
}
export type SectionModuleProps = {
  title: string
  modules: [
    {
      title: string
      subtitle: string
      description: string
    }
  ]
}
export type SectionAgendaProps = {
  title: string
  description: string
}

export type SectionPricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string[]
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: [
      {
        attributes: {
          photo: {
            data: {
              attributes: {
                name: string
                url: string
              }
            }
          }
          name: string
          role: string
          description: string
          socialLinks: [
            {
              title: string
              url: string
            }
          ]
        }
      }
    ]
  }
}
export type SectionReviewsProps = {
  title: string
  reviews: [
    {
      name: string
      text: string
      photo: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  ]
}
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcept: SectionConceptsProps
  sectionModule: SectionModuleProps
  sectionAgenda: SectionAgendaProps
  sectionPricingBox: SectionPricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}
