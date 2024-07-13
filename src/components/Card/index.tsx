import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';
import { CardProps } from '../../types/StationProps';

interface DragItem {
  index: number;
  id: string;
  type: string;
  listIndex: number;
}

const Card = ({ data, index, listIndex }: { data: CardProps, index: number, listIndex: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { move } = useContext(BoardContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { index, id: data.id, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: DragItem, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current!.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggerOffset = monitor.getClientOffset();
      const draggedTop = draggerOffset!.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex
      item.listIndex = targetListIndex
    },
  });

  drag(drop(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}

export default Card;
