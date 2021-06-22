import React, { useCallback } from 'react';

import { Button, Flex, Form, IModalProps, Input, Modal } from '../../../../components';
import { TManageJobProps } from '../../index';
import { IDropData } from '../../../../types';
import { putNewMessageJobResponse } from '../../../../services';

interface IProps {
  open: boolean;
  handleClose: IModalProps['handleClose'];
  dropData: IDropData;
  handleChangeCandidateStatus: TManageJobProps['handleChangeCandidateStatus'];
}

const SendMessageFinishedComponent: React.FC<IProps> = ({
  open,
  handleClose,
  dropData,
  handleChangeCandidateStatus,
}) => {
  const handleSubmit = useCallback(
    async (data: { message: string }) => {
      try {
        if (data.message) {
          await putNewMessageJobResponse(dropData.candidate.jobResponseId, data);
        }
      } catch (error) {}

      handleClose();
      handleChangeCandidateStatus(dropData);
    },
    [handleClose, handleChangeCandidateStatus, dropData]
  );

  return (
    <Modal title="Envie uma mensagem ao candidato" open={open} handleClose={handleClose}>
      <Flex marginTop="md">
        <Form onSubmit={handleSubmit}>
          <Input name="message" label="Mensagem" multiline rows={3} />

          <Flex>
            <Button
              variant="tertiary"
              marginLeft="auto"
              marginRight="sm"
              onClick={() => handleClose(false)}
            >
              Cancelar
            </Button>

            <Button type="submit">Enviar</Button>
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
};

export const SendMessageFinished = React.memo(SendMessageFinishedComponent);
