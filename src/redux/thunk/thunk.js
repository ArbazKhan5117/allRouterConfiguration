import { loginAccount, logoutAccount } from '../actions/actions';
export const loginFun = () => async dispatch => {
    dispatch(loginAccount(true));
};
export const logoutFun = () => async dispatch => {
    dispatch(logoutAccount(false));
};