import React, { useCallback } from 'react';
import { Button, Flex, Form, Input, Modal } from '../../../../components';
import { applyJobModalValidationSchema } from '../../../../validationSchemas';

interface IProps {
  open: boolean;
  handleClose(): void;
}

const ApplyJobModalComponent: React.FC<IProps> = ({ open, handleClose }) => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Modal open={open} handleClose={handleClose} title="Adicionar vaga">
      <Form onSubmit={handleSubmit} validationSchema={applyJobModalValidationSchema}>
        <Input name="jobId" label="Código da vaga" />

        <Flex>
          <Button variant="tertiary" marginLeft="auto" onClick={handleClose}>
            Cancelar
          </Button>

          <Button type="submit" marginLeft="sm">
            Adicionar
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export const ApplyJobModal = React.memo(ApplyJobModalComponent);
