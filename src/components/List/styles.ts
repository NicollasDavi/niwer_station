import styled from 'styled-components';
import { ContainerProps } from '../../types/StationProps';

export const Container = styled.div<ContainerProps>`
  padding: 0 0 5px 6px;
  height: 85%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)};
  background: #f4f4f4;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  border: 0.6px solid #d3d3d3;
  position: relative;

  & + div {
    margin-left: 20px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .custom-scrollbar {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .custom-scrollbar-content {
    overflow-y: auto;
    flex: 1;
    max-height: calc(100vh - 200px);
    padding-right: 10px;
  }

  .custom-scrollbar-track {
    position: absolute;
    top: 0;
    right: 2px;
    bottom: 2px;
    width: 4px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    opacity: 1;
    transition: background-color 0.3s ease;
  }

  .custom-scrollbar-thumb {
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.2); /* Ajuste a opacidade para um valor mais claro */
    border-radius: 4px;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .custom-scrollbar-track:hover .custom-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* Ajuste a opacidade para um valor mais claro ao passar o mouse */
  }

  &.top-shadow::before,
  &.bottom-shadow::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 15px;
    pointer-events: none;
  }

  &.bottom-shadow::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px; /* Aumenta a altura da sombra */
    box-shadow: inset 0 -40px 40px 0 rgba(244, 244, 244, 1); /* Aumenta a intensidade e altura da sombra */
    pointer-events: none;
}



`;

export const Space = styled.section`
  width: 330px;
  height: 2px;
`;
