import React from 'react'
import styled from 'styled-components'
import Image from '../image'

import BgMine from '../../../images/bg-mine.svg'

const AnimBg = ({children, ...props}) => {
  return (
    <StyledAnimBgList {...props}>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
        <StyledAnimBgItem><Image src={BgMine} /></StyledAnimBgItem>
    </StyledAnimBgList>
  )
}

const StyledAnimBgList = styled.ul(props => `
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
`)

const StyledAnimBgItem = styled.li(props => `
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	animation: animate 25s linear infinite;
	bottom: -150px;
	&:nth-child(1){
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}
	&:nth-child(2){
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	&:nth-child(3){
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	&:nth-child(4){
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	&:nth-child(5){
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	&:nth-child(6){
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	&:nth-child(7){
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	&:nth-child(8){
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	&:nth-child(9){
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	&:nth-child(10){
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	@keyframes animate {
		0%{
			transform: translateY(0) rotate(0deg);
			border-radius: 0;
			opacity: .2;
		}
		100%{
			transform: translateY(-1000px) rotate(720deg);
			border-radius: 50%;
			opacity: 0;
		}
	}
`)

export default AnimBg