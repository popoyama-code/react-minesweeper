import React from 'react'
import styled from 'styled-components'  
import properties from '../../_settings/properties'

const Heading = ({children, level=3, ...props}) => {
  return (
    <StyledHeading as={`h${level}`} {...props}>{children}</StyledHeading>
  )
}

const StyledHeading = styled.div(props => `
  color: ${props.fontColor || properties.COLOR.BLACK};
  display: block;
  font-family: ${props.fontFamily || "inherit"};
  font-size: ${props.fontSize || properties.FONT.SIZE_S};
  line-height: ${props.lineHeight || 1.5};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
`)

export default Heading