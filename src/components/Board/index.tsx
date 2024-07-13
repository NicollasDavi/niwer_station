import React, { useState } from 'react';
import {produce} from 'immer';
import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List/index';

import { Container } from './styles';
import { ListProps } from '../../types/StationProps';

const data = loadLists();

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListProps[]>(data);

  const move = (fromList: number, toList: number, from: number, to: number) => {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} listIndex={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
