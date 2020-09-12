const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const totalPriceItems = (arr) => arr.reduce((sum, item) => item.price + sum, 0);
const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_CART': {
      const itemCurrent = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: itemCurrent,
          totalPrice: totalPriceItems(itemCurrent),
        },
      };
      const getItems = Object.values(newItems).map((obj) => obj.items);
      const concatItems = [].concat.apply([], getItems);
      const totalPrice = totalPriceItems(concatItems);
      return {
        ...state,
        items: newItems,
        totalCount: concatItems.length,
        totalPrice,
      };
    }
    case 'CLEAR_CART':
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    case 'DELETE_ITEM_FROM_CART':
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice=newItems[action.payload].totalPrice;
      const currentTotalCount=newItems[action.payload].items.length;
      
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    default:
      return state;
  }
};
export default cart;
