import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { CreateCompanyView } from './createCompany';
import * as CreateCompanyActions from '../../store/ducks/createCompany/actions';

const mapStateToProps = ({ createCompany }: IApplicationState) => ({
  createCompany,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CreateCompanyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompanyView);
