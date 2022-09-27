// react or any other library related content
import { ReactNode } from "react";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

// styles
import { ModalContainer, Overflow } from "./styles";

// components

// services and utils

// images

// types

// interfaces
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

function Modal({ children, isOpen }: ModalProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <Overflow
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <ModalContainer
            initial={{ bottom: window.innerWidth > 768 ? "-10%" : "-50%" }}
            animate={{ bottom: window.innerWidth > 768 ? "50%" : "0%" }}
            exit={{ bottom: window.innerWidth > 768 ? "-10%" : "-50%" }}
            transition={{ duration: 0.3, ease: [0.53, 0.21, 0, 1] }}
          >
            {children}
          </ModalContainer>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default Modal;
