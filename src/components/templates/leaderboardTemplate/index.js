import React from 'react'
import styled from 'styled-components'

import Layout from '../../atoms/layout'
import Leaderboard from '../../organisms/leaderboard'
import AnimBg from '../../atoms/animBg'

const LeaderboardTemplate = ({timeArray}) => {
  return (
    <Layout styleHeight="100vh" styleWidth="100vw">
        <AnimBg />
        <LeaderboardWrap>
          <Leaderboard timeArray={timeArray} />
        </LeaderboardWrap>
    </Layout>
  )
}

const LeaderboardWrap = styled.div(props => `
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`)

export default LeaderboardTemplate