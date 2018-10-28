import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, order) => ({
  type: actionTypes.PURCHASE_BURGER_SUCCESS,
  id,
  order
});

export const purchaseBurgerFailed = error => ({
  type: actionTypes.PURCHASE_BURGER_FAILED,
  error
});

export const purchaseBurgerStart = order => {
  return dispatch => {
    axios.post('/orders.json', order)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data, order));
      })
      .catch(error => {
        dispatch(purchaseBurgerFailed(error))
      });
  }
};