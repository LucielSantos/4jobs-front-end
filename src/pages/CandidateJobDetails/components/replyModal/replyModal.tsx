import React, { useCallback } from 'react';
import { Button, DynamicForm, Flex, Form, Modal } from '../../../../components';
import { IDynamicFormField } from '../../../../store/ducks/createJob/types';
import { candidateReplyDynamicFormValidationSchema } from '../../../../validationSchemas';

interface IProps {
  open: boolean;
  handleClose(): void;
  fields: IDynamicFormField[];
}

const ReplyModalComponent: React.FC<IProps> = ({ open, handleClose, fields }) => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Responder ao formulário"
      width="md"
    >
      <Form
        onSubmit={handleSubmit}
        validationSchema={candidateReplyDynamicFormValidationSchema}
        schemaParams={{ fields }}
      >
        <DynamicForm fields={fields} path="fields" />

        <Flex marginTop="md">
          <Button marginLeft="auto" variant="tertiary" onClick={handleClose}>
            Responder
          </Button>

          <Button type="submit" marginLeft="sm">
            Responder
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export const ReplyModal = React.memo(ReplyModalComponent);
