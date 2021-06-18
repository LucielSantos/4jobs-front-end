import { format } from 'date-fns';
import React from 'react';
import { Modal } from '../';
import { useRequest } from '../../hooks';
import { getJobResponseMessages } from '../../services';
import { IMessageJobResponseRequest } from '../../types';
import { LoadingMessage } from '../loadingMessage';
import { IModalProps } from '../modal';

import { Container, MessageBody, MessageContainer, MessageInfo } from './styles';

interface IProps {
  jobResponseId: string;
  open: boolean;
  handleClose: IModalProps['handleClose'];
}

const MessagesModalComponent: React.FC<IProps> = ({
  jobResponseId,
  open,
  handleClose,
}) => {
  const [data, isLoading] = useRequest<IMessageJobResponseRequest>({
    handleRequest: getJobResponseMessages,
    initialReqParams: [jobResponseId],
  });

  return (
    <Modal open={open} handleClose={handleClose} title="Mensagens">
      <Container>
        {isLoading ? (
          <LoadingMessage text="Carregando mensagens" />
        ) : (
          data?.messages.map((message, key) => (
            <MessageContainer key={`message-${key}`}>
              <MessageInfo>
                {message.author} -{' '}
                <span>{format(new Date(message.date), 'dd/MM/yyyy HH:mm')}</span>
              </MessageInfo>

              <MessageBody>{message.message}</MessageBody>
            </MessageContainer>
          ))
        )}
      </Container>
    </Modal>
  );
};

export const MessagesModal = React.memo(MessagesModalComponent);
