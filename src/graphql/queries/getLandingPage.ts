const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        data {
          attributes {
            name
            alternativeText
            url
          }
        }
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcon {
        icon {
          data {
            attributes {
              url
            }
          }
        }
        title
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
        }
      }
    }
  }
`
export default GET_LANDING_PAGE
