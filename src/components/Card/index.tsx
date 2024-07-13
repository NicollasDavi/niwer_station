import React from 'react'

import { Container, Label } from './styles'

import { Card } from '../../types/StationProps'

const index = ({data} : {data : Card}) => {
  return (
    <Container>
      <header>
        {data.labels.map(label => <Label key={label} color={label}/>)}
      </header>
      <p>{data.content}</p>
      { data.user && <img src={data.user} alt="" />}
    </Container>
  )
}

export default index
