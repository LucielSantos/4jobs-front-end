import React from 'react';
import { Flex } from '../';
import { IJobPreview } from '../../types';
import { Tags } from '../tags';
import { Typography } from '../typography';

interface IProps {
  job: IJobPreview | false;
}

const JobPreviewComponent: React.FC<IProps> = ({ job }) => {
  if (!job) {
    return null;
  }

  return (
    <Flex flexDirection="column">
      <Typography size="lg" weight="medium" marginTop="sm">
        {job.title}
      </Typography>

      <Typography marginTop="md" color="three">
        Nome da empresa:
      </Typography>
      <Typography marginTop="xs">{job.company.name}</Typography>

      <Typography marginTop="md" color="three">
        Segmento de mercado da empresa:
      </Typography>
      <Typography marginTop="xs">{job.company.marketSegment}</Typography>

      <Typography marginTop="md" color="three">
        Prazo para resolução do desafio:
      </Typography>
      <Typography marginTop="xs">{job.deadlineResolve} dias</Typography>

      <Typography marginTop="md" color="three">
        Descrição:
      </Typography>
      <Typography marginTop="xs">{job.description}</Typography>

      <Typography marginTop="md" color="three">
        Solução esperada:
      </Typography>
      <Typography marginTop="xs">{job.expectedResolution}</Typography>

      <Typography marginTop="md" color="three">
        Solução esperada:
      </Typography>
      <Typography marginTop="xs">{job.observations}</Typography>

      <Typography marginTop="md" color="three">
        Observações:
      </Typography>
      <Typography marginTop="xs">{job.observations}</Typography>

      <Typography marginTop="md" marginBottom="xs" color="three">
        Tags relacionadas:
      </Typography>
      <Tags items={job.tags} />
    </Flex>
  );
};

export const JobPreview = React.memo(JobPreviewComponent);
