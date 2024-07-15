import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #4F4F4F;
`;

export const Dropdown = styled.div`
  position: relative;
  width: 97%;
`;

export const DropdownToggle = styled.div`
  padding: 10px 10px;
  border: 0.6px solid #D3D3D3;
  border-radius: 1px;
  background-color: #fff;
  font-size: 15px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: start;
  user-select: none;
  svg:first-child {
    margin-right: 10px;
  }

  &:hover {
    border-color: #a8a8a8;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1000;
  max-height: 200px;
  margin-top: 5px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-weight: bold;


  &::before {
    content: 'FUNIL DE VENDAS';
    display: block;
    padding: 10px 15px;
    font-size: 12px;
    font-weight: bold;
    color: #9e9e9e;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  font-size: 15px;
  color: #4F4F4F;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
