import React, { useState } from 'react';
import { Container, Logo, Nav, Menu, UserActions } from './styles';
import { FaSearch, FaTh, FaBell, FaCog, FaAngleDown } from 'react-icons/fa';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('/negociacoes');

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Container>
      <Nav>
        <Logo>
          <img src="https://via.placeholder.com/40" alt="Logo" />
          <div className="text">
            <h1>Niwer Station</h1>
            <span>CRM</span>
          </div>
        </Logo>
        <Menu>
          <li>
            <a
              href="#negociacoes"
              className={activeLink === '/negociacoes' ? 'active' : ''}
              onClick={() => handleSetActive('/negociacoes')}
            >
              Negociações
            </a>
          </li>
          <li>
            <a
              href="#empresas"
              className={activeLink === '/empresas' ? 'active' : ''}
              onClick={() => handleSetActive('/empresas')}
            >
              Empresas
            </a>
          </li>
          <li>
            <a
              href="#contatos"
              className={activeLink === '/contatos' ? 'active' : ''}
              onClick={() => handleSetActive('/contatos')}
            >
              Contatos
            </a>
          </li>
          <li>
            <a
              href="#tarefas"
              className={activeLink === '/tarefas' ? 'active' : ''}
              onClick={() => handleSetActive('/tarefas')}
            >
              Tarefas
            </a>
          </li>
          <li>
            <a
              href="#analises"
              className={activeLink === '/analises' ? 'active' : ''}
              onClick={() => handleSetActive('/analises')}
            >
              Análises
            </a>
          </li>
          <li>
            <a
              href="#marketing"
              className={activeLink === '/marketing' ? 'active' : ''}
              onClick={() => handleSetActive('/marketing')}
            >
              Marketing
            </a>
          </li>
        </Menu>
      </Nav>
      <UserActions>
        <FaSearch className="icon" />
        <FaTh className="icon" />
        <FaBell className="icon" />
        <FaCog className="icon" />
        <img src="https://via.placeholder.com/40" alt="User" />
        <div className="user-info">
          <span>Nicollas Davi de Souza</span>
          <small>Curso Positivo</small>
        </div>
        <FaAngleDown className="arrow-icon" />
      </UserActions>
    </Container>
  );
};

export default Header;
