// src/components/FilterList/index.tsx
import React, { useState } from 'react';
import { FiltersContainer, ButtonsContainer, Button, ListButton, Total } from './style';
import Filter from '../Filter';
import { MdBarChart, MdAdd } from 'react-icons/md';
import { FaList } from "react-icons/fa";
import CreateLeadForm from '../CreateLeadForm';

const FilterList = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const lists = ["List 1", "List 2", "List 3"]; // Suas listas existentes

  const handleCreateLead = (lead: { name: string; phone: string; email: string; cpf: string; company: string; position: string; list: string }) => {
    console.log('Novo lead:', lead);
  };

  return (
    <>
      <ButtonsContainer>
        <ListButton>
          <div><MdBarChart size={24} /></div>
          <div><FaList size={18} /></div>
        </ListButton>
        <Button onClick={() => setIsAsideOpen(true)}>
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

      <CreateLeadForm 
        onSubmit={handleCreateLead} 
        onClose={() => setIsAsideOpen(false)} 
        lists={lists} 
        isOpen={isAsideOpen} 
      />
    </>
  );
};

export default FilterList;
