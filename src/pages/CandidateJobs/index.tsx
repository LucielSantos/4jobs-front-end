import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { IApplicationState } from '../../store';
import { CandidateJobsView } from './candidateJobs';
import * as CandidateJobsActions from '../../store/ducks/candidateJobs/actions';
import {
  ICandidateJobsSetDialogs,
  ICandidateJobsState,
} from '../../store/ducks/candidateJobs/types';
import { ILinkJob } from '../../types';

interface IStateProps extends ICandidateJobsState {}

interface IDispatchProps {
  handleLoadJobs(): void;
  handleCleanApplyModal(): void;
  handleApplyJob(data: ILinkJob): void;
  handleGetJobPreview(jobId: string): void;
  handleCleanMessage(jobId: string): void;
  onSetCandidateJobDialog(
    field: ICandidateJobsSetDialogs['field'],
    value: ICandidateJobsSetDialogs['value']
  ): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TCandidateJobsProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ candidateJobs }: IApplicationState) => ({
  ...candidateJobs,
});

const mapActionToProps = (dispatch: Dispatch) => bindActionCreators(CandidateJobsActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(CandidateJobsView);
