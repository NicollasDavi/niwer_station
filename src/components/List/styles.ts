import styled from 'styled-components';
import { ContainerProps } from '../../types/StationProps';

export const Container = styled.div<ContainerProps>`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)};
  background: #ebecf0;
  border-radius: 3px;
  padding: 15px 0 0 10px;
  display: flex;
  flex-direction: column;
  border: 0.6px solid #D3D3D3;

  & + div {
    margin-left: 20px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;


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

  ul {
    margin-top: 30px;
    flex: 1;
    overflow: auto;
    position: relative;
    max-height: calc(100vh - 200px);
    padding-right: 15px;
  }
`;

export const Space =styled.section`
    width: 335px;
    height: 0.1px;
`;