import { types } from '../types/types';

const initState = {
    checking: true,
    // uid: null,
    // name: null,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload,
            };

        default:
            return state;
    }
};
