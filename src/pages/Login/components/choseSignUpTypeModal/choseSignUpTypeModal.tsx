import React, { useCallback, useEffect, useState } from 'react';
import { History } from 'history';
import { Modal, IModalProps, Button } from '../../../../components';
import { routePaths } from '../../../../routes';
import CrateCandidate from '../../../CreateCandidate';

import { Container } from './styles';

interface IProps extends IModalProps {
  history: History;
}

/** This is a modal state, 0: choose sign-up; 1: candidate sign-up */
export type TStateModal = 0 | 1;

const ChoseSignUpTypeModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
  history,
}) => {
  const [state, setState] = useState<TStateModal>(0);

  useEffect(() => {
    !open && setState(0);
  }, [open]);

  const onClickCompany = useCallback(() => {
    history.push(routePaths.CREATE_COMPANY);
    handleClose();
  }, [history, handleClose]);

  const onClickCandidate = useCallback(() => setState(1), []);

  const setStateModal = (newState: TStateModal) => setState(newState);

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      width="xs"
      title={state === 0 ? undefined : 'Candidato - Cadastrar-se'}
    >
      <Container>
        {state === 0 ? (
          <>
            <Button fullWidth marginBottom="sm" onClick={onClickCandidate}>
              Cadastrar-se como Candidato
            </Button>

            <Button fullWidth variant="secondary" onClick={onClickCompany}>
              Cadastrar-se como Empresa
            </Button>
          </>
        ) : (
          <CrateCandidate setStateModal={setStateModal} />
        )}
      </Container>
    </Modal>
  );
};

export const ChoseSignUpTypeModal = React.memo(ChoseSignUpTypeModalComponent);
