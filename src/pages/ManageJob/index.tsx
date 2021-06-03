import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { IApplicationState } from '../../store';
import { ManageJobView } from './manageJob';
import * as ManageJobActions from '../../store/ducks/manageJob/actions';
import { IManageJobState } from '../../store/ducks/manageJob/types';
import { IDropData } from '../../types';

interface IStateProps extends IManageJobState {}

interface IDispatchProps {
  handleLoadCandidates(jobId: string): void;
  handleChangeCandidateStatus(data: IDropData): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TManageJobProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ manageJob }: IApplicationState) => ({
  ...manageJob,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(ManageJobActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(ManageJobView);
