import React, { useCallback } from 'react';
import { Button, Flex, Form, Input, JobPreview, Modal } from '../../../../components';
import { ICandidateJobsState } from '../../../../store/ducks/candidateJobs/types';
import { IJobPreview } from '../../../../types';
import { applyJobModalValidationSchema } from '../../../../validationSchemas';

interface IProps {
  open: boolean;
  loadingsGetJobPreview: boolean;
  loadingApplyJob: boolean;
  jobPreview: IJobPreview | false;
  applyModalState: ICandidateJobsState['applyModalState'];
  handleClose(): void;
  handleCleanApplyModal(): void;
  handleGetJobPreview(jobId: string): void;
  handleApplyJob(jobId: string): void;
}

const ApplyJobModalComponent: React.FC<IProps> = ({
  open,
  jobPreview,
  applyModalState,
  loadingsGetJobPreview,
  loadingApplyJob,
  handleClose,
  handleGetJobPreview,
  handleCleanApplyModal,
  handleApplyJob,
}) => {
  const handleSubmit = useCallback(
    (data: { jobId: string }) => {
      handleGetJobPreview(data.jobId);
    },
    [handleGetJobPreview]
  );

  const onClickApplyJob = useCallback(() => {
    jobPreview && handleApplyJob(jobPreview.id);
  }, [jobPreview, handleApplyJob]);

  return (
    <Modal open={open} handleClose={handleClose} title="Adicionar vaga">
      {applyModalState === 1 ? (
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
      ) : (
        <Flex flexDirection="column">
          <JobPreview job={jobPreview} />

          <Flex marginTop="md">
            <Button variant="tertiary" marginLeft="auto" onClick={handleCleanApplyModal}>
              Cancelar
            </Button>

            <Button marginLeft="sm" onClick={onClickApplyJob} isLoading={loadingApplyJob}>
              Confirmar candidatura
            </Button>
          </Flex>
        </Flex>
      )}
    </Modal>
  );
};

export const ApplyJobModal = React.memo(ApplyJobModalComponent);
