import React, { useCallback, useState } from 'react';

import { IModalProps, Modal, Typography } from '../';
import { jobStatus, TJobStatus } from '../../constants';
import { patchChangeJobStatus } from '../../services';
import { openNotification } from '../../utils';
import { Button } from '../button';
import { Flex } from '../flex';

interface IProps {
  open: boolean;
  handleClose: IModalProps['handleClose'];
  jobId: string;
  currentJobStatus: TJobStatus;
  postConfirm?(newStatus: TJobStatus): void;
}

const CancelRegistrationModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
  jobId,
  currentJobStatus,
  postConfirm,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConfirm = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await patchChangeJobStatus(
        jobId,
        currentJobStatus === jobStatus.opened
          ? (jobStatus.closed as TJobStatus)
          : (jobStatus.opened as TJobStatus)
      );

      if (response.status === 200) {
        openNotification(
          `Inscrições ${
            currentJobStatus === jobStatus.opened ? 'canceladas' : 'abertas'
          } com sucesso`
        );
        handleClose();
        postConfirm &&
          postConfirm(
            currentJobStatus === jobStatus.opened
              ? (jobStatus.closed as TJobStatus)
              : (jobStatus.opened as TJobStatus)
          );
      }
    } catch (error) {}

    setIsLoading(false);
  }, [jobId, currentJobStatus, postConfirm, handleClose]);

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title={`${currentJobStatus === jobStatus.opened ? 'Cancelar' : 'Abrir'} inscrições à vaga`}
      width="xs"
    >
      <Typography marginTop="sm" marginBottom="lg">
        Confirmar {currentJobStatus === jobStatus.opened ? 'cancelamento' : 'abertura'} de
        inscrições?
      </Typography>

      <Flex>
        <Button
          variant="tertiary"
          marginLeft="auto"
          marginRight="sm"
          onClick={() => handleClose(false)}
        >
          Cancelar
        </Button>

        <Button variant="danger" onClick={handleConfirm} isLoading={isLoading}>
          Confirmar
        </Button>
      </Flex>
    </Modal>
  );
};

export const CancelRegistrationModal = React.memo(CancelRegistrationModalComponent);
