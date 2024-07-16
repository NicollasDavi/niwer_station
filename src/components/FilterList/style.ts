import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  margin: 30px 0 5px 0;
  background: #fff;
  border-radius: 4px;
  height: 50px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  margin: 10px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 20px;
  background: #7024FF;
  color: #fff;
  border: none;
  border-radius: 1px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #009aa6;
  }

  & + button {
    margin-left: 10px;
  }
`;

export const IconButton = styled(Button)`
  padding: 10px;
`;

export const ListButton = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #7024FF;
    color: #fff;
    border: 0.6px solid #D3D3D3;
    border-radius: 1px 0 0 1px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:last-child {
      border-radius: 0 4px 4px 0;
      background: #fff;
      color: #7024FF;
    }

    &:hover {
      background: #009aa6;
    }

    &:last-child:hover {
      background: #e6f7f8;
    }

    & + div {
      border-left: none;
    }
  }
`;

export const Total = styled.p`
    margin-left: 50px;
    width: 130px;
    text-align: center;
    padding: 2px;
    font-size: 12px;
    font-weight: bold;
    background-color: #f4f4f4;
`;
