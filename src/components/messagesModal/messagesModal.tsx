import { FormHandles, SubmitHandler } from '@unform/core';
import { format } from 'date-fns';
import React, { useCallback, useRef } from 'react';

import { Modal, Flex, Form, LoadingMessage, IModalProps, Input } from '../';
import { Icon } from '../../assets/icons';
import { useRequest } from '../../hooks';
import { getJobResponseMessages, putNewMessageJobResponse } from '../../services';
import { IMessageJobResponseRequest, INewMessage } from '../../types';
import { newMessageValidationSchema } from '../../validationSchemas';

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
  const formRef = useRef<FormHandles>(null);

  const [data, isLoading, getMessages] = useRequest<IMessageJobResponseRequest>({
    handleRequest: getJobResponseMessages,
    initialReqParams: [jobResponseId],
  });

  const handleSubmit = useCallback<SubmitHandler<INewMessage>>(
    async (data, { reset }) => {
      try {
        await putNewMessageJobResponse(jobResponseId, data);

        getMessages(jobResponseId);

        reset();
      } catch (error) {
        console.log(error);
      }
    },
    [jobResponseId, getMessages]
  );

  const onClickSend = useCallback(() => {
    formRef.current?.submitForm();
  }, [formRef]);

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

        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          validationSchema={newMessageValidationSchema}
        >
          <Flex>
            <Input name="message" multiline rows={3} floatingError fullWidth />

            <Icon
              name="send"
              size="sm"
              clickable
              marginLeft="sm"
              marginTop="auto"
              onClick={onClickSend}
            />
          </Flex>
        </Form>
      </Container>
    </Modal>
  );
};

export const MessagesModal = React.memo(MessagesModalComponent);
