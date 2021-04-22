import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IApplicationState } from '../../store';
import { IMainState, TSetNavbarState } from '../../store/ducks/main/types';
import * as MainActions from '../../store/ducks/main/actions';
import { MainView } from './main';
import { bindActionCreators, Dispatch } from 'redux';

interface IStateProps extends IMainState {}

interface IDispatchProps {
  onSetNavbarState(state: TSetNavbarState): void;
}

interface IOwnProps extends RouteComponentProps {}

export type MainViewProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ main }: IApplicationState) => ({
  ...main,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MainActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
