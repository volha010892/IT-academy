import {combineReducers} from 'redux';

import itemsReducer from './items';

let combinedReducer=combineReducers({
    items: itemsReducer,
});

export default combinedReducer;