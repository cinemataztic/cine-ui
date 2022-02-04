import React, { useState } from 'react';
import Modal from './Modal.component';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="text-secondary bg-buttonPrimary rounded p-2 text-center"
        onClick={openModal}
      >
        Open modal
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <div>
          <div className="flex justify-between">
            <div>
              <p className="text-xl text-bold pb-4">Delete ad</p>
            </div>
            <div>
              <img
                onClick={closeModal}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
              />
            </div>
          </div>
          <p className="pb-4">
            You are about to delete the Coco Cola Winter. Are you sure you want
            to delete it?
          </p>
          <button
            onClick={closeModal}
            className="mr-4 bg-buttonSecondary text-secondary rounded p-2"
          >
            Cancel
          </button>
          <button
            className="bg-danger text-secondary rounded p-2"
            onClick={() => {
              console.log('Deleted');
            }}
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export const Base = Template.bind({});
