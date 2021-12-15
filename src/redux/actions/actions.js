import { LOGIN, LOGOUT} from '../types/types';
export const loginAccount = (data) => ({
    type: LOGIN,
    payload: data
});

export const logoutAccount = (data) => ({
    type: LOGOUT,
    payload: data
});
