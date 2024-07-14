import styled from "styled-components";

export const Container = styled.div`
  height: 65px;
  padding: 0 30px;
  background: #fff;
  color: #7159c1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Lato', sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  .text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;

    h1 {
      font-size: 24px;
      color: #000;
      margin: 0;
      font-weight: 700;
      font-family: 'Lato', sans-serif;
    }

    span {
      font-size: 12px;
      color: #000;
      font-family: 'Lato', sans-serif;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 20px;
    font-size: 16px;
    color: #000;

    a {
      text-decoration: none;
      color: inherit;
      position: relative;
      padding: 10px 0;

      &.active {
        color: #00aaff;
        font-weight: bold;
      }

      &.active::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 2px;
        width: 100%;
        background: #00aaff;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 20px;
  }

  .icon {
    font-size: 18px; 
    margin: 0 13px; 
    color: #666; 
    cursor: pointer;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 150px; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
      display: block;
      font-family: 'Lato', sans-serif;
      font-weight: 600;
    }

    small {
      font-size: 12px;
      color: #666;
      font-family: 'Lato', sans-serif;
    }
  }

  .arrow-icon {
    font-size: 12px;
    color: #666;
    margin-left: 5px;
    cursor: pointer;
  }
`;
