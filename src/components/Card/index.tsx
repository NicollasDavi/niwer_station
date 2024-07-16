import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FaStar, FaUser, FaRegCalendarAlt } from 'react-icons/fa';

import BoardContext from '../Board/context';

import { Container, Label, Status, Info } from './styles';
import { CardProps } from '../../types/StationProps';

interface DragItem {
  index: number;
  id: string;
  type: string;
  listIndex: number;
}

const Card: React.FC<{ data: CardProps, index: number, listIndex: number }> = ({ data, index, listIndex }) => {
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
      if (!ref.current) {
        return;
      }

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggerOffset = monitor.getClientOffset();
      if (!draggerOffset) {
        return;
      }

      const draggedTop = draggerOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  drag(drop(ref));

  return (
    <Container ref={ref} data-is-dragging={isDragging}>
      <header>
        <Status color={data.statusColor}><span />{data.status}</Status>
        <span>i</span>
      </header>
      <p>{data.name}</p>
      <span>{data.course}</span>
      <footer>
        <span><FaStar /> {data.contacts}</span>
        <span><FaUser /> {data.contacts}</span>
      </footer>
      <Info>
        {data.info !== "" ? <FaRegCalendarAlt /> : '+'}
        {data.info !== "" ? data.info : "Criar tarefa"}
      </Info>
    </Container>
  );
}

export default Card;
