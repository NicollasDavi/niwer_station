import React, { useEffect, useRef, useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDrop } from 'react-dnd';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import Card from '../Card';
import { Container, Space } from './styles';
import { List as ListProps } from '../../types/StationProps';
import BoardContext from '../Board/context';

interface Props {
  data: ListProps;
  listIndex: number;
}

const ListComponent: React.FC<Props> = ({ data, listIndex }) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const { move } = useContext(BoardContext);

  useEffect(() => {
    if (scrollRef.current) {
      const ps = new PerfectScrollbar(scrollRef.current);
      return () => {
        ps.destroy();
      };
    }
  }, []);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: any, monitor) {
      if (!data.cards.length) {
        const draggedListIndex = item.listIndex;
        const targetListIndex = listIndex;

        if (draggedListIndex === targetListIndex) {
          return;
        }

        console.log(`Moving card from list ${draggedListIndex}, index ${item.index} to list ${targetListIndex}, index 0`);
        move(draggedListIndex, targetListIndex, item.index, 0);
        item.index = 0;
        item.listIndex = targetListIndex;
      }
    },
  });

  return (
    <Container ref={drop} done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#fff' />
          </button>
        )}
      </header>

      <ul ref={scrollRef}>
        <Space/>
        {Array.isArray(data.cards) && data.cards.map((card, index) => (
          card && (
            <Card
              key={card.id}
              listIndex={listIndex}
              index={index}
              data={card}
            />
          )
        ))}
      </ul>
    </Container>
  );
}

export default ListComponent;
