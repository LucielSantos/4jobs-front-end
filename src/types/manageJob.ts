import { TJobResponseValues } from '../constants';
import { ICandidateByJob } from './job';

export interface IDropData {
  candidate: ICandidateByJob;
  newColumnName: string;
  oldColumnName: string;
  newStatus: TJobResponseValues;
  oldStatus: TJobResponseValues;
}
