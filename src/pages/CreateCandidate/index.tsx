import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import * as CreateCandidateActions from '../../store/ducks/createCandidate/actions';
import {
  ICreateCandidateData,
  ICreateCandidateState,
} from '../../store/ducks/createCandidate/types';
import { TStateModal } from '../Login/components';
import { CreateCandidateView } from './createCandidate';

interface IStateProps extends ICreateCandidateState {}

interface IDispatchProps {
  handleCreateCandidate(data: ICreateCandidateData): void;
}

interface IOwnProps {
  setStateModal(newState: TStateModal): void;
}

export type TCreateCandidateProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ createCandidate }: IApplicationState) => ({
  ...createCandidate,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(CreateCandidateActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(CreateCandidateView);
