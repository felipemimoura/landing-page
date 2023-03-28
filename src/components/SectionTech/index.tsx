import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps, TechIcon } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ techIcon, title }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcon.map(({ title, icon }: TechIcon) => (
          <S.Icon key={title}>
            <S.Icons
              src={getImageUrl(icon.data.attributes.url)}
              alt={title}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
