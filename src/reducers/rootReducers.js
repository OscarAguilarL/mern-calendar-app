import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    // TODO: Auth reducer
    // TODO: Calendar reducer
});
