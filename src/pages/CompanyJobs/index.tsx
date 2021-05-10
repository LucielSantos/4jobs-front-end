import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { CompanyJobsView } from './companyJobs';
import * as CompanyJobsActions from '../../store/ducks/companyJobs/actions';
import { connect } from 'react-redux';
import { ICompanyJobsState } from '../../store/ducks/companyJobs/types';
import { RouteComponentProps } from 'react-router';

interface IStateProps extends ICompanyJobsState {}

interface IDispatchProps {
  onLoadJobs(): void;
}

interface IOwnProps extends RouteComponentProps {}

export type TCompanyJobsProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ companyJobs }: IApplicationState) => ({
  ...companyJobs,
});

const mapActionToProps = (dispatch: Dispatch) =>
  bindActionCreators(CompanyJobsActions, dispatch);

export default connect(mapStateToProps, mapActionToProps)(CompanyJobsView);
