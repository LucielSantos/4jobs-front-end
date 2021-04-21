import React from 'react';
import { Modal, IModalProps, Button } from '../../../../components';

interface IProps extends IModalProps {}

const ChoseSignUpTypeModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} handleClose={handleClose} width="xs">
      <Button fullWidth marginBottom="sm">
        Cadastrar-se como Candidato
      </Button>

      <Button fullWidth variant="secondary">
        Cadastrar-se como Empresa
      </Button>
    </Modal>
  );
};

export const ChoseSignUpTypeModal = React.memo(ChoseSignUpTypeModalComponent);
