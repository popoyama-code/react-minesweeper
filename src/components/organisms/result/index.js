import React from 'react'
import styled from 'styled-components'

import Modal from '../../atoms/modal'
import ResultCard from '../../molecules/resultCard'
import Image from '../../atoms/image'
import Heading from '../../atoms/heading'

import TroubledFaceImg from '../../../images/troubled-face.svg'
import SmileFaceImg from '../../../images/smile-face.svg'

import Constants from '../../../helper/constants'
import properties from '../../_settings/properties'

const Result = ({timer, gameStatus}) => {
  if (gameStatus === Constants.STATUS.WIN) {
    return (
      <Modal>
        <ResultCard>
          <StyledCardInner animation="zoom">
            <Image src={SmileFaceImg} styleWidth="50%" styleHeight="auto" />
            <Heading level={1} fontColor={properties.COLOR.WHITE} fontSize={properties.FONT.SIZE_L} fontFamily="'Play'">CLEAR TIME</Heading>
            <Heading level={2} fontColor={properties.COLOR.WHITE} fontSize={properties.FONT.SIZE_L}>{timer}秒</Heading>
          </StyledCardInner>
        </ResultCard>
      </Modal>
    )
  } else if ( gameStatus === Constants.STATUS.LOST) {
    return (
      <Modal>
        <ResultCard>
          <StyledCardInner animation="shake">
            <Image src={TroubledFaceImg} styleWidth="50%" styleHeight="auto" className="troubled-face" />
            <Heading level={1} fontColor={properties.COLOR.WHITE} fontSize={properties.FONT.SIZE_L} fontFamily="'Play'">GAME OVER</Heading>
          </StyledCardInner>
        </ResultCard>
      </Modal>
    )
  }
  return null
}

const StyledCardInner = styled.div(props => `
  align-items: center;
  animation: ${props.animation} 0.5s;
  animation-iteration-count: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 100%;

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-2px, -3px) rotate(-1deg); }
    20% { transform: translate(-5px, 0px) rotate(1deg); }
    30% { transform: translate(5px, 4px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-5px, 1px) rotate(0deg); }
    70% { transform: translate(5px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 5px) rotate(0deg); }
    100% { transform: translate(1px, -3px) rotate(-1deg); }
  }

  @keyframes zoom {
    from { opacity: 0; transform: scale(.5, .5); }
    to { opacity: 1; transform: scale(1, 1); }
  }
`)

export default Result