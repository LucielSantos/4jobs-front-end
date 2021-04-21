import React from 'react';
import { Modal, IModalProps } from '../../../../components';

interface IProps extends IModalProps {}

const ChoseSignUpTypeModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} handleClose={handleClose} width="xs">
      Corpo do meu modal
    </Modal>
  );
};

export const ChoseSignUpTypeModal = React.memo(ChoseSignUpTypeModalComponent);
