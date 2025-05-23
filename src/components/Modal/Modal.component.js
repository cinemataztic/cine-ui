import React, { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import './Modal.styles.css';

const Modal = ({ isModalOpen, closeModal, children, className, isDarkMode }) => {
  const initialFocusRef = useRef(null);

  return (
    <Dialog
      initialFocus={initialFocusRef}
      open={isModalOpen}
      onClose={closeModal}
      className={`fixed z-10 inset-0 overflow-y-auto ${className}`}
    >
      <div className="flex items-center justify-center min-h-screen ">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div
          className={`relative ${!isDarkMode ? 'bg-inverted' : 'bg-hover text-white'} rounded-xl p-6 max-w-sm mx-auto`}
          ref={initialFocusRef}
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  isDarkMode: PropTypes.bool
};

Modal.defaultProps = {
  isDarkMode: true,
};