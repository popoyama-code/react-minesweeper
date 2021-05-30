import React from 'react'
import styled from 'styled-components'  

const Button = ({children, onClick, onContextMenu, ...props}) => {
  return (
    <StyledButton onClick={e => onClick(e)} onContextMenu={e => onContextMenu(e)} {...props}><span>{children}</span></StyledButton>
  )
}

const StyledButton = styled.button(props => `
  position: relative;
  display: inline-block;
  height: calc(${props.styleHeight} + 3px);
  span {
    align-items: center;
    background: ${props.background || "#B4869F"};
    color: ${props.fontColor || "#333"};
    display: flex;
    font-size: 1rem;
    height: ${props.styleHeight};
    justify-content: center;
    position: relative;
    text-decoration: none;
    width: ${props.styleWidth};
    filter: dropshadow(color=#333, offx=0px, offy=1px);
    box-shadow: 0 5px 0 #915981;
    border-radius: 5px;
  }
  span:active{
    height: calc(${props.styleHeight} + 3px);
    top:3px;
    background-color: #AE7795;
    box-shadow: inset 0 -3px 0 #915981;
  }
`)

export default Button