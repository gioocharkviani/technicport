import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
  modalTitle: string;
  modalContent: any;
  updateModalContent: (content: ReactNode) => void;
  updateModalTitle: (title: string) => void; // Function to update modal title
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalTitle: '',
  modalContent: null,
  updateModalContent: () => {},
  updateModalTitle: () => {}, // Initialize with an empty function
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title: string, content: ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalTitle('');
    setModalContent(null);
    setIsOpen(false);
  };

  const updateModalContent = (content: ReactNode) => {
    setModalContent(content);
  };

  const updateModalTitle = (title: string) => {
    setModalTitle(title);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalTitle, modalContent, updateModalContent, updateModalTitle }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
