import React from 'react'

import Layout from '../../atoms/layout'
import Result from '../../organisms/result'
import Header from '../../organisms/header'
import GameBoard from '../../organisms/gameBoard'
import AnimBg from '../../atoms/animBg'

const GameBoardTemplate = ({timer, gameStatus, ...props}) => {
  return (
    <>
      <Layout styleHeight="100vh" styleWidth="100vw">
        <AnimBg />
        <GameBoard {...props} />
        <Header timer={timer} />
      </Layout>
      <Result gameStatus={gameStatus} timer={timer} />
    </>
  )
}

export default GameBoardTemplate