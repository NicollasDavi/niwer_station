import React, { useState } from 'react';
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from './style';
import { MdArrowDropDown, MdFilterList } from 'react-icons/md';
import { LuListFilter } from "react-icons/lu";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('SEMIEXTENSIVO 2024');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option : any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <Dropdown>
        <DropdownToggle onClick={toggleDropdown}>
          <LuListFilter size={20} />
          {selectedOption}
          <MdArrowDropDown size={20} />
        </DropdownToggle>
        {isOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => handleOptionClick('SEMIEXTENSIVO 2024')}>SEMIEXTENSIVO 2024</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('AÇÃO EXTENSIVO 2023 - GIOVANA')}>AÇÃO EXTENSIVO 2023 - GIOVANA</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('SEMI 2022')}>SEMI 2022</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('#2023 - Terceirão e Extensivo')}>#2023 - Terceirão e Extensivo</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('AÇÃO EXTENSIVO 2023 - ANDRÉ')}>AÇÃO EXTENSIVO 2023 - ANDRÉ</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('AÇÃO EXTENSIVO 2023 - ADRIELE')}>AÇÃO EXTENSIVO 2023 - ADRIELE</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('AÇÃO EXTENSIVO 2023 - ISA')}>AÇÃO EXTENSIVO 2023 - ISA</DropdownItem>
            <DropdownItem onClick={() => handleOptionClick('AÇÃO EXTENSIVO 2023 - HELENA')}>AÇÃO EXTENSIVO 2023 - HELENA</DropdownItem>
          </DropdownMenu>
        )}
      </Dropdown>
    </Container>
  );
};

export default Filter;
