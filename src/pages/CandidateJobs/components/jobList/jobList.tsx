import React from 'react';
import { Flex } from '../../../../components';
import { IJobCandidateList } from '../../../../types';
import { JobListCard } from '../jobListCard';

interface IProps {
  jobs: IJobCandidateList[];
  onClickCard(job: IJobCandidateList): void;
}

const JobListComponent: React.FC<IProps> = ({ jobs, onClickCard }) => {
  return (
    <Flex marginTop="xl" flexWrap="wrap">
      {jobs.map((job, index) => (
        <JobListCard job={job} key={`job-index-${index}`} onClickCard={onClickCard} />
      ))}
    </Flex>
  );
};

export const JobList = React.memo(JobListComponent);
