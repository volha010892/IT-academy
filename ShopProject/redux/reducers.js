import { combineReducers } from 'redux';

import itemsReducer from './items';
import filtersReducer from './filters';
import cartReducer from './cart';

let combinedReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer,
  cart: cartReducer,
});

export default combinedReducer;
