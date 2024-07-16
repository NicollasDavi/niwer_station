/* src/components/CreateLeadForm/styles.ts */
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

interface OverlayProps {
  $isOpen: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${(props) => (props.$isOpen ? 0.5 : 0)});
  z-index: 999; /* Colocar abaixo do AsideContainer */
  transition: background 0.4s ease;
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
`;

interface AsideContainerProps {
  $isOpen: boolean;
}

export const AsideContainer = styled.aside<AsideContainerProps>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 450px; /* Ajustar largura do aside */
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.3s forwards;
`;

export const FormHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Ajuste para separar o título e o botão de fechar */
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const FormContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 100px; /* Espaço suficiente para o header fixo */
  padding-bottom: 100px; /* Espaço suficiente para os botões fixos */
`;

export const FormTitle = styled.h2`
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: 600;
`;

export const SectionTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  color: #666;
  font-size: 16px;
  font-weight: 600;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-weight: 500;
    margin-bottom: 5px;
    color: #333;
  }

  input, textarea, select {
    padding: 12px 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus, select:focus {
    border-color: #007bff;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  a {
    margin-top: 10px;
    color: #007bff;
    font-size: 14px;
    text-decoration: none;
  }
`;

export const FormButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* Ajustar para ocupar a largura total */
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Ajuste para separar os botões */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export const FormButton = styled.button`
  padding: 12px 20px;
  background-color: #00a0dc; /* Ajustar a cor para combinar com o exemplo fornecido */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bb5; /* Cor de hover */
  }

  &.cancel {
    background-color: #ccc;

    &:hover {
      background-color: #999;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
