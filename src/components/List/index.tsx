import React from 'react'

import { MdAdd } from 'react-icons/md'

import Card from '../Card'

import { Container } from './styles'

import { List } from '../../types/StationProps'

const index = ({data} : {data : List}) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#fff'/>
          </button>
        )}
       
      </header>

      <ul>
        {data.cards.map(card => <Card key={card.id} data={card} />)}
      </ul>
    </Container>
  )
}

export default index
