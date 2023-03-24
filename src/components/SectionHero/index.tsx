import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { LogoProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
}

const SectionHero = ({ logo }: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>React Avançado</S.Title>
            <S.Description>
              Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
            </S.Description>
            <S.Warning>⚠️ Atenção: Suporte ao curso finalizado!</S.Warning>
            <S.ButtonWrapper>
              <Button
                href="https://www.udemy.com/course/react-avancado/?couponCode=C6DFF6069B10A28BA2BC"
                onClick={onClick}
                wide
              >
                Comprar
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image src="/img/hero-illustration.svg" alt="alternativeText" />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default SectionHero
