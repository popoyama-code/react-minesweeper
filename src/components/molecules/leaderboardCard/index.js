import React from 'react'
import styled from 'styled-components'

import Card from '../../atoms/card'
import Heading from '../../atoms/heading'
import LinkButton from '../../atoms/linkButton'

import properties from '../../_settings/properties'

const LeaderboardCard = ({children}) => {
  return (
    <Card maxWidth="560px" styleWidth="100%">
      <StyledTop>
        <Heading level={1} fontSize={properties.FONT.SIZE_M} fontColor={properties.COLOR.WHITE}>クリア記録</Heading>
        <LinkButton to="/" bgColor="#333" styleHeight="5rem" styleWidth="5rem">
          <svg id="レイヤー_1" data-name="レイヤー 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.33 25.33" width="100%" height="100%"><path className="children-color" d="M310.37,410.25a1,1,0,0,0,0-1.42l-.7-.7a1,1,0,0,0-1.42,0l-9.54,9.54a1,1,0,0,1-1.42,0l-9.54-9.54a1,1,0,0,0-1.42,0l-.7.7a1,1,0,0,0,0,1.42l9.54,9.54a1,1,0,0,1,0,1.42l-9.54,9.54a1,1,0,0,0,0,1.42l.7.7a1,1,0,0,0,1.42,0l9.54-9.54a1,1,0,0,1,1.42,0l9.54,9.54a1,1,0,0,0,1.42,0l.7-.7a1,1,0,0,0,0-1.42l-9.54-9.54a1,1,0,0,1,0-1.42Z" transform="translate(-285.33 -407.83)"/></svg>
        </LinkButton>
      </StyledTop>
      <StyledContent>
        {children}
      </StyledContent>
    </Card>
  )
}

const StyledTop = styled.div(props => `
  align-items: center;
  background: #B4869F;
  display: flex;
  height: 7rem;
  justify-content: space-between;
  padding: 0 3rem;
`)
const StyledContent = styled.div(props => `
  background: #fff;
  padding: 3rem;
`)

export default LeaderboardCard