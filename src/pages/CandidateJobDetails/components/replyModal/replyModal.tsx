import React from 'react';
import { IModalProps, Modal } from '../../../../components';

interface IProps {
  open: boolean;
  handleClose: IModalProps['handleClose'];
}

const ReplyModalComponent: React.FC<IProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Responder ao formulário"
      width="md"
    >
      ReplyModalComponent
    </Modal>
  );
};

export const ReplyModal = React.memo(ReplyModalComponent);
