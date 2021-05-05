import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

/** This function use history object to go back url  */
export const goBack = () => history.goBack();
