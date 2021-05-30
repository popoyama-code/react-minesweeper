import React, { useState, useEffect, useRef } from 'react'
import useInterval from 'use-interval'

import GameTemplate from '../components/templates/gameTemplate'

import Constants from '../helper/constants'
import GameHelper from '../helper/gameHelper'
import Storage from '../helper/storage'

const Game = (props) => {
// states
  const boardSize = useRef(10)
  const [minesArray, setMinesArray] = useState(GameHelper.getBoard(boardSize.current))
  const [openedArray, setOpenedArray] = useState(null)
  const [minesNumber] = useState(15)
  const [gameStatus, setGameStatus] = useState(0)
  const [timer, setTimer] = useState(0)

  // functions
  const initBoard = () => {
    setOpenedArray(GameHelper.getBoard(boardSize.current))
    setGameStatus(Constants.STATUS.STANDBY)
  }
  
  const isGameCleared = (openedTmp) => {
    let notOpenedButtons = 0
    for (let y= 0; y < openedTmp.length; y++) {
      for (let x= 0; x < openedTmp[y].length; x++) {
        if (openedTmp[y][x] === Constants.BUTTON_STAT.NOT_OPENED || openedTmp[y][x] === Constants.BUTTON_STAT.FLAGGED) {
          notOpenedButtons++
        }
      }
    }
    if (notOpenedButtons === minesNumber) {
      return true
    }
    return false
  }

  const initMine = (index_row, index_col, board_tmp) => {
    let minesNumberTmp = minesNumber
    const size = boardSize.current - 1
    while(minesNumberTmp > 0) {
      const rnd_y = Math.floor(Math.random()*size)
      const rnd_x = Math.floor(Math.random()*size)
      if (
      (rnd_y !== index_col && rnd_x !== index_row) 
      && !(Math.abs(index_col - rnd_y) <= 1 && Math.abs(index_row - rnd_x) <= 1)
      && board_tmp[rnd_y][rnd_x] !== Constants.BUTTON_STAT.MINE) {
        board_tmp[rnd_y][rnd_x] = Constants.BUTTON_STAT.MINE
        for (let j= -1; j <= 1; j++) {
          for (let k= -1; k <= 1; k++) {
            if (!(j === 0 && k === 0) && rnd_y+j in board_tmp && rnd_x+k in board_tmp[rnd_y+j] && board_tmp[rnd_y+j][rnd_x+k] !== Constants.BUTTON_STAT.MINE) {
              board_tmp[rnd_y+j][rnd_x+k] += 1
            }
          }
        }
        minesNumberTmp--
      }
    }
  }

  const setFlagTile = (index_row, index_col) => {
    if (openedArray[index_col][index_row] === Constants.BUTTON_STAT.NOT_OPENED) {
      const opened_tmp = JSON.parse(JSON.stringify(openedArray))
      opened_tmp[index_col][index_row] = Constants.BUTTON_STAT.FLAGGED
      setOpenedArray(opened_tmp)
    } else if (openedArray[index_col][index_row] === Constants.BUTTON_STAT.FLAGGED) {
      const opened_tmp = JSON.parse(JSON.stringify(openedArray))
      opened_tmp[index_col][index_row] = Constants.BUTTON_STAT.NOT_OPENED
      setOpenedArray(opened_tmp)
    }
  }

  const isOpenable = (index_row, index_col) => {
    if (
      gameStatus === Constants.STATUS.LOST ||
      gameStatus === Constants.STATUS.WIN ||
      openedArray[index_col][index_row] === Constants.BUTTON_STAT.OPENED
    ) {
      return false
    }
    return true
  }

  // handlers
    const handleContextMenu = (index_row, index_col) => {
      if (gameStatus !== Constants.STATUS.START || !isOpenable(index_row, index_col)) return false
      setFlagTile(index_row, index_col)
    }

    const handleClick = (index_row, index_col) => {
      if (!isOpenable(index_row, index_col)) return false
      if (openedArray[index_col][index_row] === Constants.BUTTON_STAT.FLAGGED) {
        return false
      }
      const board_tmp = JSON.parse(JSON.stringify(minesArray))
      const opened_tmp = JSON.parse(JSON.stringify(openedArray))
      if (board_tmp[index_col][index_row] === Constants.BUTTON_STAT.MINE) {
        for (let y= 0; y < board_tmp.length; y++) {
          for (let x= 0; x < board_tmp[y].length; x++) {
            if (board_tmp[y][x] === Constants.BUTTON_STAT.MINE) {
              opened_tmp[y][x] = Constants.BUTTON_STAT.OPENED
            }
          }
        }
        setOpenedArray(opened_tmp)
        setGameStatus(Constants.STATUS.LOST)
        return false
      }   
      if (gameStatus === Constants.STATUS.STANDBY) {
        initMine(index_row, index_col, board_tmp)
        setGameStatus(Constants.STATUS.START)
        setMinesArray(board_tmp)
      }
      const openTile = (x, y) => {
        if (opened_tmp[y][x] === Constants.BUTTON_STAT.NOT_OPENED) {
          opened_tmp[y][x] = Constants.BUTTON_STAT.OPENED
          if (board_tmp[y][x] === 0) {
            for (let j= -1; j <= 1; j++) {
              for (let k= -1; k <= 1; k++) {
                if (!(j === 0 && k === 0) && y+j in opened_tmp && x+k in opened_tmp[y+j]) {
                  openTile(x+k, y+j)
                }
              }
            }
          }
        }
      }
      openTile(index_row, index_col)
      if (isGameCleared(opened_tmp)) {
        setGameStatus(Constants.STATUS.WIN)
        const StorageInstance = new Storage()
        StorageInstance.insertScore(timer)
      }
      setOpenedArray(opened_tmp)
    }

  useEffect(() => {
    initBoard()
  }, [])

  useInterval(() => {
    if (gameStatus === Constants.STATUS.START) setTimer(timer + 1)
  }, 1000)

  return (
    <GameTemplate
      handleClick={handleClick}
      handleContextMenu={handleContextMenu}
      minesArray={minesArray}
      openedArray={openedArray}
      gameStatus={gameStatus}
      timer={timer}
    />
  )
}

export default Game