import React from 'react'
import { loadLists } from '../../services/api'

import List from '../List/index'

import { Container } from './styles'

const lists = loadLists()

const index = () => {
  return (
    <Container>
      {lists && lists.map(list => <List key={list.title} data={list}/>)}
    </Container>
  )
}

export default index
