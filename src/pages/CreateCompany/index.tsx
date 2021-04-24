import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { CreateCompanyView } from './createCompany';
import * as CreateCompanyActions from '../../store/ducks/createCompany/actions';
import {
  ICreateCompanyData,
  ICreateCompanyState,
} from '../../store/ducks/createCompany/types';
import { RouteComponentProps } from 'react-router';

interface IStateProps extends ICreateCompanyState {}

interface IDispatchProps {
  handleCreateCompany(data: ICreateCompanyData): void;
}

interface iOwnProps extends RouteComponentProps {}

export type TCreateCompanyViewProps = IStateProps & IDispatchProps & iOwnProps;

const mapStateToProps = ({ createCompany }: IApplicationState) => ({
  ...createCompany,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CreateCompanyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompanyView);
