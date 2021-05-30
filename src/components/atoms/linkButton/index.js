import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import properties from '../../_settings/properties'

const LinkButton = ({children, to, ...props}) => {
  return (
    <Link to={to}><StyledLinkButton {...props}>{children}</StyledLinkButton></Link>
  )
}

const StyledLinkButton = styled.span(props => `
  align-items: center;
  background-color: transparent;
  border: solid 3px ${properties.COLOR.WHITE};
  border-radius: 5px;
  display: flex;
  font-size: 1rem;
  height: ${props.styleHeight};
  justify-content: center;
  padding: 1rem;
  transition: .3s;
  width: ${props.styleWidth};
  .children-color {
    fill: ${properties.COLOR.WHITE};
    stroke: ${properties.COLOR.WHITE};
  }
  :hover {
    background-color: #f7d967;
    border-color: #f7d967;
    .children-color {
      fill: #462f47;
      stroke: #462f47;
    }
  }
`)

export default LinkButton