import React from 'react'
import styled from 'styled-components'

import Properties from '../../_settings/properties'

import GameButton from '../../molecules/gameButton'

const GameBoard = React.memo(({minesArray, openedArray, handleClick, handleContextMenu}) => {
  const board = []
  if (openedArray !== null) {
    openedArray.forEach((board_row, index_col) => {
      const row = []
      board_row.forEach((button_status, index_row) => {
        row.push(
          <td key={`button_${index_row}_${index_col}`}>
            <GameButton
              status={button_status}
              number={minesArray[index_col][index_row]}
              onClick={handleClick}
              onContextMenu={handleContextMenu}
              row={index_row}
              col={index_col}
            />
          </td>
        )
      })
      board.push(<tr key={`row_${index_col}`}>{row}</tr>)
    })
  }

  return (
    <StyledGameBoard>
      <StyledContainer>
        <table>
          <tbody>
            {board}
          </tbody>
        </table>
      </StyledContainer>
    </StyledGameBoard>
  )
})

const StyledContainer =  styled.div(props => `
  background: #B5ADB7;
  border-radius: 5px;
  box-shadow: inset 0 1px 0 #99919D, 0 15px 0 #716577;
  display: inline-block;
  padding: 1rem;
  transform: rotateX(5deg);
`)

const StyledGameBoard = styled.div(props => `
  -ms-overflow-style: none;
  display: inline-block;
  height: 100%;
  overflow: scroll;
  padding: 7rem 2rem 5rem;
  perspective: 100rem;
  scrollbar-width: none;
  text-align: center;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }

  table {
    tr:nth-child(odd) {
      td:nth-child(odd) {
        background: #C9C5CB;
      }
      td:nth-child(even) {
        background: #B5ADB7;
      }
    }
    tr:nth-child(even) {
      td:nth-child(odd) {
        background: #B5ADB7;
      }
      td:nth-child(even) {
        background: #C9C5CB;
      }
    }
    td {
      padding: .1rem .2rem;
    }
  }

  button {
    transform: translateY(-0.6rem);
  }

  .board {
    border: solid 0.5rem#121212;
    margin: 5rem 0 7rem;
    .tile {
      border: solid 0.3rem#121212;
      border-radius: 1rem;
      background-color: #e9b07b;
      width: 7rem;
      height: 7rem;
      color:  #e9b07b;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
      &.dark {
        background-color:#58493b;
      }
    }
  }

  @media screen and (${Properties.MEDIA.NOT_SP}) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`)

export default GameBoard