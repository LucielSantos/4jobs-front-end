import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { IApplicationState } from '../../store';
import { CandidateJobDetailsView } from './candidateJobDetails';
import * as CandidateJobDetailsActions from '../../store/ducks/candidateJobDetails/actions';
import {
  ICandidateJobDetailsDialogs,
  ICandidateJobDetailsState,
} from '../../store/ducks/candidateJobDetails/types';
import { IResponseFormJob } from '../../types';

interface IStateProps extends ICandidateJobDetailsState {}

interface IDispatchProps {
  handleLoadJobDetails(jobId: string): void;
  handleSetDialog(
    field: keyof ICandidateJobDetailsDialogs,
    value: boolean
  ): void;
  handleReplyForm(data: { jobId: string; fields: IResponseFormJob[] }): void;
  handleCleanMessage(): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TCandidateJobDetailsProps = IStateProps &
  IDispatchProps &
  IOwnProps;

const mapStateToProps = ({ candidateJobDetails }: IApplicationState) => ({
  ...candidateJobDetails,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(CandidateJobDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapActionToProps
)(CandidateJobDetailsView);
