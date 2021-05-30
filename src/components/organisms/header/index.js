import React from 'react'
import styled from 'styled-components'

import properties from '../../_settings/properties'

const Header = ({timer}) => {
  return (
    <StyledHeader>
      <StyledTimer fontColor="#fff">{timer}</StyledTimer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header(props => `
  align-items: center;
  background: #2b2b2b;
  display: flex;
  height: 5rem;
  justify-content: center;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
`)

const StyledTimer = styled.div(props => `
  color: ${properties.COLOR.WHITE};
  display: inline-block;
  font-size: ${properties.FONT.SIZE_M};
`)

export default Header