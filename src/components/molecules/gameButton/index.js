import React from 'react'
import styled from 'styled-components'

import Image from '../../atoms/image'
import Button from '../../atoms/button'

import FlagImg from '../../../images/flag.svg'
import MineImg from '../../../images/mine.svg'

import Constants from '../../../helper/constants'

const GameButton = ({onClick, onContextMenu, status, number, row, col}) => {
  const hancleClick = () => {onClick(row, col)}
  const handleOnContextMenu = (e) => {
    e.preventDefault()
    onContextMenu(row, col)
  }
  let content
  let surface
  if (number !== 0) {
    content = number
  }
  if (status === Constants.BUTTON_STAT.FLAGGED) {
    surface = (<Image src={FlagImg} styleWidth="50%" />)
  }
  if (number === Constants.BUTTON_STAT.MINE) {
    content = (<Image src={MineImg} styleWidth="70%" />)
  }
  return (
    <StyledGameButton number={number}>
      {status === Constants.BUTTON_STAT.OPENED ?
        content : 
        <Button onClick={hancleClick}
                onContextMenu={handleOnContextMenu}
                styleHeight="5rem"
                styleWidth="5rem"
        >
          {surface}
        </Button>
      }
    </StyledGameButton>
  )
}

const StyledGameButton = styled.div(props => {
  let color = "#333"
  if (props.number === 1) color="blue"
  else if (props.number === 2) color="green"
  else if (props.number === 3) color="red"
  else if (props.number === 4) color="navy"
  else if (props.number === 5) color="maroon"
  else if (props.number === 6) color="teal"
  else if (props.number === 7) color="purple"
  else if (props.number === 8) color="gray"
  return `
    align-items: center;
    color: ${color};
    display: flex;
    font-size: 1.4rem;
    font-weight: 700;
    height: calc(5rem + 3px);
    justify-content: center;
    width: 5rem;
  `
})

export default GameButton