import { ModalHeader } from "@chakra-ui/modal";
import { ModalBody } from "@chakra-ui/modal";
import { ModalCloseButton } from "@chakra-ui/modal";
import { ModalContent } from "@chakra-ui/modal";
import { ModalOverlay } from "@chakra-ui/modal";
import { Modal } from "@chakra-ui/modal";
import React from "react";
import { JsxElement } from "typescript";
import { ContactToFirebase } from "../../features/addContactToFirebase/addContactToFirebaseSlice";

interface KModalProps {
  title: string;
  children: JsxElement | any;
  isOpen: boolean;
  contact?: ContactToFirebase;
  onClose: () => void;
  onOpen: () => void;
};

const KModal = ({ onOpen, isOpen, onClose, children, title, contact }: KModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KModal;