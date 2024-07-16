import React, { useEffect, useRef, useContext, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDrop } from 'react-dnd';
import { Container, Space } from './styles';
import { List as ListProps } from '../../types/StationProps';
import BoardContext from '../Board/context';
import Card from '../Card';

interface Props {
  data: ListProps;
  listIndex: number;
}

const ListComponent: React.FC<Props> = ({ data, listIndex }) => {
  const [isTopShadow, setIsTopShadow] = useState(false);
  const [isBottomShadow, setIsBottomShadow] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);
  const { move } = useContext(BoardContext);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        setIsTopShadow(scrollTop > 0);
        setIsBottomShadow(scrollTop + clientHeight < scrollHeight);

        const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
        const thumbTop = (scrollTop / scrollHeight) * clientHeight;
        setThumbHeight(thumbHeight);
        setThumbTop(thumbTop);
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
      handleScroll(); // Run on mount to set initial shadows

      return () => {
        contentRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, [data.cards]);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setShowScrollbar(scrollHeight > clientHeight);
      }
    };

    checkOverflow();
  }, [data.cards]);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: any, monitor) {
      if (!contentRef.current) {
        return;
      }

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if (draggedListIndex === targetListIndex) {
        return;
      }

      const { y: draggedOffsetY } = monitor.getClientOffset() || { y: 0 };
      const { top, bottom } = contentRef.current.getBoundingClientRect();
      const middleY = (bottom - top) / 2;

      if (draggedOffsetY > middleY) {
        move(draggedListIndex, targetListIndex, item.index, data.cards.length);
        item.index = data.cards.length;
        item.listIndex = targetListIndex;
      } else {
        move(draggedListIndex, targetListIndex, item.index, 0);
        item.index = 0;
        item.listIndex = targetListIndex;
      }
    },
  });

  return (
    <Container
      ref={drop}
      $done={data.done} // Usar $done em vez de done
      className={`${isTopShadow ? 'top-shadow' : ''} ${isBottomShadow ? 'bottom-shadow' : ''}`}
    >
      <Space />
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#fff' />
          </button>
        )}
      </header>
      <Space />
      <div className="custom-scrollbar" ref={scrollRef}>
        <ul className="custom-scrollbar-content" ref={contentRef}>
          <Space />
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
        {showScrollbar && (
          <div className="custom-scrollbar-track">
            <div
              className="custom-scrollbar-thumb"
              style={{ height: `${thumbHeight}px`, top: `${thumbTop}px` }}
            ></div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ListComponent;
