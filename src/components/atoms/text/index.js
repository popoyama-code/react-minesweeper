import React from 'react'
import styled from 'styled-components'  
import properties from '../../_settings/properties'

const Text = ({children, ...props}) => {
  return (
    <StyledText {...props}>{children}</StyledText>
  )
}

const StyledText = styled.p(props => `
  color: ${props.fontColor || properties.COLOR.BLACK};
  font-size: ${props.fontSize || properties.FONT.SIZE_S};
  line-height: ${props.lineHeight || 1.5};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
`)

export default Text