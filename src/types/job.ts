import { TJobResponseValues } from '../constants';

export interface IJobPreview {
  id: string;
  title: string;
  deadlineResolve: number;
  description: string;
  expectedResolution: string;
  observations: string;
  tags: string[];
  company: {
    id: string;
    name: string;
    marketSegment: string;
  };
}

export interface ILinkJob {
  jobId: string;
  companyId: string;
}

export interface IJobCandidateList {
  id: string;
  challengeResolved: boolean;
  status: TJobResponseValues;
  job: {
    id: string;
    title: string;
    deadlineResolve: number;
    observations: string;
  };
}
