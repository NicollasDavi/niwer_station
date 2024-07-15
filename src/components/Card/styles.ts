import styled, { css } from "styled-components";
import { DragProps } from "../../types/StationProps";

export const Container = styled.div<DragProps>`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 10px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: box-shadow 0.2s;
  width: 330px;
  max-width: 100%;
  border: 0.6px solid #D3D3D3;


  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;

    span {
      font-size: 12px;
      color: #bbb;
    }
  }

  p {
    font-weight: 600;
    line-height: 20px;
    color: #333;
    margin-bottom: 5px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 12px;
    color: #999;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    span {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #666;

      svg {
        margin-right: 5px;
      }
    }
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      span {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;

export const Status = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: #333;

  span {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${(props) => props.color};
    margin-right: 5px;
  }
`;

export const Info = styled.div`
  background: #f5f5f5;
  padding: 5px 10px;
  border-radius: 3px;
  margin-top: 10px;
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    margin-right: 5px;
  }
`;
