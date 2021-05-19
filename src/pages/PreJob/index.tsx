import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { IApplicationState } from '../../store';
import { PreJobView } from './preJob';
import * as PreJobActions from '../../store/ducks/preJob/actions';
import { IPreJobState } from '../../store/ducks/preJob/types';

interface IStateProps extends IPreJobState {}

interface IDispatchProps {
  handleLoadJobPreview(jobId: string): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TPreJobProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ preJob }: IApplicationState) => ({
  ...preJob,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(PreJobActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(PreJobView);
