import React from 'react'

import Layout from '../../atoms/layout'
import AnimBg from '../../atoms/animBg'
import Title from '../../organisms/title'

const TitleTemplate = props => {
  return (
    <Layout styleHeight="100vh" styleWidth="100vw">
      <AnimBg />
      <Title />
    </Layout>
  )
}

export default TitleTemplate