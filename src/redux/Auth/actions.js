case "FETCH_USER_DATA_INIT":
case "FETCH_USER_DATA_SUCCESS":
case "FETCH_USER_DATA_FAILURE":
case "RESET_USER_DATA":



    export const types = {
        INIT: 'auth/INIT',
        GET_USER: 'auth/GET_USER',
        SET_STATE: 'auth/SET_STATE',
        SIGN_UP: 'auth/SIGN_UP',
        SIGN_IN: 'auth/SIGN_IN',
        CONFIRMATION: 'auth/CONFIRMATION',
        SIGN_OUT: 'auth/SIGN_OUT',
        FORGOT_PASSWORD: 'auth/FORGOT_PASSWORD',
        CHANGE_PASSWORD: 'auth/CHANGE_PASSWORD',
        COMPLETE_NEW_PASSWORD: 'auth/COMPLETE_NEW_PASSWORD',
    };


    import { Auth } from 'aws-amplify';

    Auth.signIn(username, password);



    import Amplify from 'aws-amplify';


    Amplify.configure(ampConfig);