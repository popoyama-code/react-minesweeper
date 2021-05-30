import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import LinkButton from '../../atoms/linkButton'
import Image from '../../atoms/image'
import Heading from '../../atoms/heading'
import PlayImg from '../../../images/play.svg'

import properties from '../../_settings/properties'

const Title = ({timer, gameStatus}) => {
    return (
      <StyledTitle>
        <Heading fontColor={properties.COLOR.WHITE} fontSize={properties.FONT.SIZE_L} fontFamily="'Play'">MINE SWEEPER</Heading>
        <Link to ="/game">
          <PlayWrap>
            <Image src={PlayImg} styleHeight="auto" styleWidth="50%" />
          </PlayWrap>
        </Link>
        <LinkButton to="/leaderboard" styleHeight="64px" styleWidth="64px">
          <svg id="レイヤー_1" data-name="レイヤー 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 26.5" width="100%" height="100%"><rect className="children-color" x="4.04" y="22.64" width="25.31" height="3.86"/><path className="children-color" d="M312,313.75a2.5,2.5,0,0,0-1.73,4.3l-5.75,4.7-4.63-6.92a2.51,2.51,0,1,0-2.87-.07l-5.15,7-6-4.89a2.49,2.49,0,1,0-1.9.89,2.39,2.39,0,0,0,.66-.1l.88,14.1h25.31l.88-14,.27,0a2.5,2.5,0,0,0,0-5Zm-13.8,16a2.5,2.5,0,1,1,2.5-2.5A2.49,2.49,0,0,1,298.2,329.75Z" transform="translate(-281.5 -311.25)"/></svg>
        </LinkButton>
      </StyledTitle>
    )
}

const StyledTitle = styled.div(props => `
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`)

const PlayWrap = styled.div(props => `
  align-items: center;
  animation: play 1s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  height: 128px;
  justify-content: center;
  margin: 5rem 0;
  overflow: hidden;
  position: relative;
  width: 128px;

  img {
    transform: scale(.9, .9);
    transition: transform .3s;
  }

  :before {
    background-color: #f7d967;
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .3s;
    z-index: -1;
  }

  :hover {
    img {
      transform: scale(1, 1);
    }
    :before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @keyframes play {
    from { transform: scale(.9, .9); }
    to { transform: scale(1, 1); }
  }
`)

export default Title