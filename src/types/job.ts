import { TJobResponseValues, TJobStatus } from '../constants';
import { ICreateJob, IDynamicFormField } from '../store/ducks/createJob/types';

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
  created_at: Date;
  job: {
    id: string;
    title: string;
    deadlineResolve: number;
    observations: string;
    description: string;
  };
}

export interface IResponseFormJob {
  value: string;
  title: string;
}
export interface IJobCandidateDetails {
  id: string;
  candidateId: string;
  jobId: string;
  companyId: string;
  challengeResolved: boolean;
  status: TJobResponseValues;
  created_at: Date;
  response: IResponseFormJob;
  job: {
    id: string;
    title: string;
    deadlineResolve: number;
    description: string;
    expectedResolution: string;
    observations: string;
    observationsAfterEvaluation: string;
    tags: string[];
    fields: IDynamicFormField[];
  };
}

export interface ICandidateByJob {
  id: string;
  email: string;
  name: string;
  jobResponseId: string;
  status: TJobResponseValues;
}

export interface IListCandidateByJob {
  registered: ICandidateByJob[];
  finished: ICandidateByJob[];
  answering: ICandidateByJob[];
  inEvaluation: ICandidateByJob[];
}

export interface IJobDetails extends ICreateJob {
  id: string;
  status: TJobStatus;
}
