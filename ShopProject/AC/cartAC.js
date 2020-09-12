export const addItemtoCart = (item) => ({
  type: 'ADD_ITEM_CART',
  payload: item,
});
export const clearCart = () => ({
  type: 'CLEAR_CART',
});
export const deleteItemFromCart = (id) => ({
  type: 'DELETE_ITEM_FROM_CART',
  payload: id,
});
