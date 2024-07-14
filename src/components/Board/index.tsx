import React, { useState, useCallback } from 'react';
import {produce} from 'immer';
import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';
import { ListProps } from '../../types/StationProps';

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListProps[]>(loadLists());

  const move = useCallback((fromList: number, toList: number, from: number, to: number) => {
    setLists(produce(draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
      console.log(`Moved card from list ${fromList}, index ${from} to list ${toList}, index ${to}`);
    }));
  }, [setLists]);

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
