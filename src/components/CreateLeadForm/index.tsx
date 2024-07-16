// src/components/CreateLeadForm/index.tsx
import React, { useState, useEffect } from 'react';
import { AsideContainer, Overlay, FormHeader, FormContent, FormTitle, SectionTitle, FormField, FormButtonContainer, FormButton, CloseButton } from './styles';

interface CreateLeadFormProps {
  onSubmit: (lead: { name: string; phone: string; email: string; cpf: string; company: string; position: string; list: string }) => void;
  onClose: () => void;
  lists: string[];
  isOpen: boolean;
}

const CreateLeadForm: React.FC<CreateLeadFormProps> = ({ onSubmit, onClose, lists, isOpen }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [list, setList] = useState(lists[0] || '');

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setPhone('');
      setEmail('');
      setCpf('');
      setCompany('');
      setPosition('');
      setList(lists[0] || '');
    }
  }, [isOpen, lists]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, email, cpf, company, position, list });
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} $isOpen={isOpen} />
      <AsideContainer $isOpen={isOpen}>
        <FormHeader>
          <FormTitle>Criar Negociação</FormTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </FormHeader>
        <FormContent>
          <form onSubmit={handleSubmit}>
            <FormField>
              <label>Nome da negociação *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Digite o nome da negociação"
              />
            </FormField>
            <FormField>
              <label>Funil de vendas</label>
              <select
                value={list}
                onChange={(e) => setList(e.target.value)}
                required
              >
                {lists.map((listName) => (
                  <option key={listName} value={listName}>{listName}</option>
                ))}
              </select>
            </FormField>
            <FormField>
              <label>Etapa do funil de vendas</label>
              <select required>
                <option value="">Selecionar</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
            </FormField>
            <FormField>
              <label>Fonte</label>
              <select required>
                <option value="">Selecionar</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
            </FormField>
            <FormField>
              <label>Campanha</label>
              <select required>
                <option value="">Selecionar</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
            </FormField>
            <SectionTitle>INFORMAÇÕES DA EMPRESA</SectionTitle>
            <FormField>
              <label>Empresa da negociação *</label>
              <select required>
                <option value="">Selecionar</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
              <a href="#" style={{ marginTop: '10px', color: '#007bff', fontSize: '14px' }}>+ Adicionar empresa</a>
            </FormField>
            <SectionTitle>INFORMAÇÕES DO CONTATO</SectionTitle>
            <FormField>
              <label>Contato</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Digite o contato"
              />
            </FormField>
          </form>
        </FormContent>
        <FormButtonContainer>
          <FormButton type="button" className="cancel" onClick={onClose}>Cancelar</FormButton>
          <FormButton type="submit" form="create-lead-form">Criar Negociação</FormButton>
        </FormButtonContainer>
      </AsideContainer>
    </>
  );
};

export default CreateLeadForm;
