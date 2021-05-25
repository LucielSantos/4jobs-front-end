import React, { useCallback } from 'react';
import { Button, DynamicForm, Flex, Form, Modal } from '../../../../components';
import { IDynamicFormField } from '../../../../store/ducks/createJob/types';
import { IResponseFormJob } from '../../../../types';
import { candidateReplyDynamicFormValidationSchema } from '../../../../validationSchemas';

interface IProps {
  open: boolean;
  isLoading: boolean;
  fields: IDynamicFormField[];
  jobId: string;
  handleClose(): void;
  handleReplyForm(data: { jobId: string; fields: IResponseFormJob[] }): void;
}

const ReplyModalComponent: React.FC<IProps> = ({
  open,
  jobId,
  fields,
  isLoading,
  handleClose,
  handleReplyForm,
}) => {
  const handleSubmit = useCallback(
    (data: { fields: IResponseFormJob[] }) => {
      handleReplyForm({ jobId, fields: data.fields });
    },
    [handleReplyForm, jobId]
  );

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
        <DynamicForm fields={fields} path="fields" fieldsName="value" />

        <Flex marginTop="md">
          <Button marginLeft="auto" variant="tertiary" onClick={handleClose}>
            Cancelar
          </Button>

          <Button type="submit" marginLeft="sm" isLoading={isLoading}>
            Responder
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export const ReplyModal = React.memo(ReplyModalComponent);
