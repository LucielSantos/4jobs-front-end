import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { IApplicationState } from '../../store';
import { CreateJobView } from './createJob';
import * as CreateJobActions from '../../store/ducks/createJob/actions';
import { ICreateJobState } from '../../store/ducks/createJob/types';

interface IStateProps extends ICreateJobState {}

interface IDispatchProps {
  onLoadPage(): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TCreateJobProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ createJob }: IApplicationState) => ({
  ...createJob,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(CreateJobActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(CreateJobView);
