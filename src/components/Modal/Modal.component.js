import React from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import './Modal.styles.css';

const getDialogColor = (color) => {
  switch (color) {
    case 'secondary':
      return 'bg-hover text-white';
    case 'primary':
    default:
      return 'bg-white text-black';
  }
};

const Modal = ({ isModalOpen, closeModal, children, color }) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModal}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen ">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div
          className={`relative ${getDialogColor(
            color,
          )} rounded-xl p-6  max-w-sm mx-auto`}
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
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.element.isRequired,
};

Modal.defaultProps = {
  color: 'secondary',
};
