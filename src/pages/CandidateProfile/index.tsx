import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { IApplicationState } from '../../store';
import { CandidateProfileView } from './candidateProfile';
import * as CandidateProfileActions from '../../store/ducks/candidateProfile/actions';
import { ICandidateProfileState } from '../../store/ducks/candidateProfile/types';

interface IStateProps extends ICandidateProfileState {}

interface IDispatchProps {
  handleLoadDetails(): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TCandidateProfileProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ candidateProfile }: IApplicationState) => ({
  ...candidateProfile,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(CandidateProfileActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(CandidateProfileView);
