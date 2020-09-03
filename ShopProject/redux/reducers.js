import { combineReducers } from 'redux';

import itemsReducer from './items';
import filtersReducer from './filters';

let combinedReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer,
});

export default combinedReducer;
