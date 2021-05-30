import React from 'react'
import styled from 'styled-components'

import LeaderboardCard from '../../molecules/leaderboardCard'
import Image from '../../atoms/image'

import CrownGoldImg from '../../../images/crown-gold.svg'
import CrownSilverImg from '../../../images/crown-silver.svg'
import CrownBronzeImg from '../../../images/crown-bronze.svg'

import Properties from '../../_settings/properties'

const Leaderboard = ({timeArray}) => {
  const items = []
  timeArray.forEach((val, i) => {
    i++
    items.push(
      <StyledTimeItem key={`row_${i}`}>
        <div>
          {i}
          <StyledIcon>
            {i === 1 ? <Image src={CrownGoldImg} styleHeight="3rem" styleWidth="3rem" /> : null}
            {i === 2 ? <Image src={CrownSilverImg} styleHeight="3rem" styleWidth="3rem" /> : null}
            {i === 3 ? <Image src={CrownBronzeImg} styleHeight="3rem" styleWidth="3rem" /> : null}
          </StyledIcon>
        </div>
        <div>{val}秒</div>
      </StyledTimeItem>
    )
  })
  return (
    <LeaderboardCard>
      <dl>
        <StyledTimeTitle>TOP 5</StyledTimeTitle>
        {items}
      </dl>
    </LeaderboardCard>
  )
}

const StyledTimeTitle =  styled.dt(props => `
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`)

const StyledTimeItem =  styled.dd(props => `
  border: solid 1px #ddd;
  border-radius: 5px;
  font-size: 2rem;
  color: #333;
  font-weight: 500;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 1rem;
}
  @media screen and (${Properties.MEDIA.NOT_SP}) {

  }
`)

const StyledIcon = styled.span(props => `
  margin-left: 1rem;
`)

export default Leaderboard