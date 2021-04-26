import React, { useCallback } from 'react';
import { History } from 'history';
import { Modal, IModalProps, Button } from '../../../../components';
import { routePaths } from '../../../../routes';

interface IProps extends IModalProps {
  history: History;
}

const ChoseSignUpTypeModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
  history,
}) => {
  const onClickCompany = useCallback(() => {
    history.push(routePaths.CREATE_COMPANY);
    handleClose();
  }, [history, handleClose]);

  return (
    <Modal open={open} handleClose={handleClose} width="xs">
      <Button fullWidth marginBottom="sm" disabled>
        Cadastrar-se como Candidato
      </Button>

      <Button fullWidth variant="secondary" onClick={onClickCompany}>
        Cadastrar-se como Empresa
      </Button>
    </Modal>
  );
};

export const ChoseSignUpTypeModal = React.memo(ChoseSignUpTypeModalComponent);
