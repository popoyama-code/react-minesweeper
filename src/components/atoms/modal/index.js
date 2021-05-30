import React from 'react'
import styled from 'styled-components'

const Modal = ({children}) => {
  return (
    <StyledBackground>
      <StyledModal>
        {children}
      </StyledModal>
    </StyledBackground>
  )
}

const StyledBackground =  styled.div(props => `
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  height: 100vh;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 99;
`)

const StyledModal =  styled.div(props => `
  max-width: 100%;
  z-index: 100;
`)

export default Modal