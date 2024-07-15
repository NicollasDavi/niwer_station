import React from 'react';
import { FiltersContainer, ButtonsContainer, Button, IconButton, ListButton, Total } from './style';
import Filter from '../Filter';
import { MdFilterList, MdBarChart, MdSync, MdAdd } from 'react-icons/md';

import { FaList } from "react-icons/fa";


const FilterList = () => {
  return (
    <>
      <ButtonsContainer>
        <ListButton>
          <div><MdBarChart size={24} /></div>
          <div><FaList size={18} /></div>
        </ListButton>
        <Button>
          <MdAdd size={24} />
          Criar
        </Button>
      </ButtonsContainer>
      <FiltersContainer>
        <Filter />
        <Filter />
        <Filter />
        <Filter />
      </FiltersContainer>
      <Total>
        3321 Negociações
      </Total>
    </>
  );
};

export default FilterList;
