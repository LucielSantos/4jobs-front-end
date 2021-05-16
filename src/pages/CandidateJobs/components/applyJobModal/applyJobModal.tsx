import React, { useCallback } from 'react';
import { Button, Flex, Form, Input, Modal } from '../../../../components';
import { applyJobModalValidationSchema } from '../../../../validationSchemas';

interface IProps {
  open: boolean;
  loadingsGetJobPreview: boolean;
  handleClose(): void;
  handleGetJobPreview(jobId: string): void;
}

const ApplyJobModalComponent: React.FC<IProps> = ({
  open,
  loadingsGetJobPreview,
  handleClose,
  handleGetJobPreview,
}) => {
  const handleSubmit = useCallback(
    (data: { jobId: string }) => {
      handleGetJobPreview(data.jobId);
    },
    [handleGetJobPreview]
  );

  return (
    <Modal open={open} handleClose={handleClose} title="Adicionar vaga">
      <Form onSubmit={handleSubmit} validationSchema={applyJobModalValidationSchema}>
        <Input name="jobId" label="Código da vaga" />

        <Flex>
          <Button variant="tertiary" marginLeft="auto" onClick={handleClose}>
            Cancelar
          </Button>

          <Button type="submit" marginLeft="sm" isLoading={loadingsGetJobPreview}>
            Adicionar
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export const ApplyJobModal = React.memo(ApplyJobModalComponent);
