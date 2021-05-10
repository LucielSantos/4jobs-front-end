import React from 'react';
import { Flex } from '../../../../components';
import { ICompanyJobsState } from '../../../../store/ducks/companyJobs/types';
import { JobListCard } from '../jobListCard';

interface IProps {
  jobs: ICompanyJobsState['jobs'];
}

const JobListComponent: React.FC<IProps> = ({ jobs }) => {
  return (
    <Flex marginTop="xl" flexWrap="wrap">
      {jobs.map((job, index) => (
        <JobListCard job={job} key={`job-index-${index}`} />
      ))}
    </Flex>
  );
};

export const JobList = React.memo(JobListComponent);
