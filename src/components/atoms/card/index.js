import React from 'react'
import styled from 'styled-components'  

const Card = ({children, ...props}) => {
  return (
    <StyledCard {...props}>
      <StyledInner>{children[0]}</StyledInner>
      <StyledInner>{children[1]}</StyledInner>
    </StyledCard>
  )
}

const StyledCard = styled.section(props => `
  background: ${props.background || "transparent"};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: ${props.margin || 0};
  max-width: ${props.maxWidth};
  overflow: hidden;
  padding: ${props.padding || 0};
  width: ${props.styleWidth};
}`)

const StyledInner = styled.div(props => `
  overflow: hidden;
  width: 100%;
}`)

export default Card