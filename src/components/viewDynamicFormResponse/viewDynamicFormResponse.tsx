import React from 'react';

import { IModalProps, Modal, LoadingMessage } from '../';
import { useRequest } from '../../hooks';
import { getJobResponses } from '../../services';
import { IGetJobResponse } from '../../types';
import { Body } from './components';

interface IProps {
  open: boolean;
  handleClose: IModalProps['handleClose'];
  jobResponseId: string;
}

const ViewDynamicFormResponseComponent: React.FC<IProps> = ({
  open,
  handleClose,
  jobResponseId,
}) => {
  const [fields, isLoadingFields] = useRequest<IGetJobResponse>({
    handleRequest: getJobResponses,
    initialReqParams: [jobResponseId],
  });

  return (
    <Modal open={open} handleClose={handleClose} title="Visualizar resposta do candidato">
      {isLoadingFields ? (
        <LoadingMessage text="Carregando respostas" />
      ) : fields ? (
        <Body response={fields.response} />
      ) : null}
    </Modal>
  );
};

export const ViewDynamicFormResponse = React.memo(ViewDynamicFormResponseComponent);
