import React from 'react'
import styled from 'styled-components'

import Card from '../../atoms/card'
import LinkButton from '../../atoms/linkButton'

const ResultCard = ({children}) => {
  return (
    <Card maxWidth="240px" styleWidth="100vw">
      <StyledCardInner>
        {children}     
      </StyledCardInner>
      <StyledCardInner>
        <LinkButton to="/" bgColor="#f7d967" styleHeight="64px" styleWidth="64px">
          <svg id="レイヤー_1" data-name="レイヤー 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.42 23.11"><path className="children-color" d="M314.92,410.35l-1.11-1.11a1,1,0,0,0-1.41,0l-18.29,18.3L283.6,417a1,1,0,0,0-1.41,0l-1.11,1.1a1,1,0,0,0,0,1.42l12.24,12.23a1,1,0,0,0,1.25.11.93.93,0,0,0,.46-.24l19.89-19.89A1,1,0,0,0,314.92,410.35Z" transform="translate(-280.79 -408.95)"/></svg>
        </LinkButton>
      </StyledCardInner>
    </Card>
  ) 
}

const StyledCardInner = styled.div(props => `
  align-items: center;
  display: flex;
  padding: 1rem;
  justify-content: center;
`)

export default ResultCard