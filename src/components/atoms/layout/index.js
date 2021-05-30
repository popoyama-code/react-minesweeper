import React from 'react'
import styled from 'styled-components'

const Layout = ({children, ...props}) => {
  return (
    <StyledLayout {...props}>
      {children}
      <StyledCopyright>©popos.work 2021</StyledCopyright>
    </StyledLayout>
  )
}

const StyledLayout = styled.main(props => `
  background-image: linear-gradient(to bottom, #35233b, #3e2942, #473048, #50364f, #593d56);
  height: ${props.styleHeight};
  min-height: 100vh;
  min-width: 100vw;
  width: ${props.styleWidth};
`)

const StyledCopyright = styled.small(props => `
  bottom: 0;right: 0;
  color: rgba(255,255,255, .3);
  font-size: 1.3rem;
  position: fixed;
`)

export default Layout