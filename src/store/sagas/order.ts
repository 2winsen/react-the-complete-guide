import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions';
import * as actionTypes from '../actions/actionTypes';

export function* purchaseBurgerSaga(action: actionTypes.PurchaseBurger) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post('/orders.json?auth=' + action.token, action.order);
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.order));
  } catch (error) {
    yield put(actions.purchaseBurgerFailed(error));
  }
}

export function* fetchOrdersSaga(action: actionTypes.FetchOrders) {
  yield put(actions.fetchOrdersStart());
  const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
  try {
    const response = yield axios.get('/orders.json' + queryParams);
    const orders = [];
    for (const key of Object.keys(response.data)) {
      orders.push({ ...response.data[key], id: key });
    }
    yield put(actions.fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(actions.fetchOrdersFail(error));
  }
}