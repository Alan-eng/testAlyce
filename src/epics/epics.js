import { of } from 'rxjs';
import {
  delay, mapTo, map, mergeMap, switchMap, throttleTime, catchError,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';


import {
  FETCH_USERS,
  FETCH_APPLE,
  FETCH_APPLE_SUCCESS,
  RESET_APPLES,
  FETCH_BASKET,
  SHOW_ERR_MESSAGE,
  fetchUsers,
  fetchUsersSuccess,
  fetchAppleSuccess,
  fetchBasketSuccess,
  showErrMessage,
  clearErrMessage,
  fetchBasket,
} from '../actions/actions';

const CORS = 'https://cors-anywhere.herokuapp.com/';
const urlAlyce = 'http://hrtest.alycedev.com/';


export const fetchUsersEpic = (action$) => action$.pipe(
  ofType(FETCH_USERS),
  mergeMap(() => (
    ajax.getJSON(`${CORS}${urlAlyce}users`).pipe(
      map((users) => fetchUsersSuccess(users)),
      catchError((error) => showErrMessage(error.xhr.response || 'Something went wrong')),
    )
  )),
);

export const fetchBasketsEpic = (action$) => action$.pipe(
  ofType(FETCH_BASKET, FETCH_APPLE_SUCCESS),
  switchMap(() => (
    ajax.getJSON(`${CORS}${urlAlyce}basket`).pipe(
      map((basket) => fetchBasketSuccess(basket)),
      catchError((error) => showErrMessage(error.xhr.response || 'Something went wrong')),
    )
  )),
);

export const fetchAppleEpic = (action$) => action$.pipe(
  ofType(FETCH_APPLE),
  throttleTime(1000),
  mergeMap((action) => (
    ajax.getJSON(`${CORS}${urlAlyce}users/${action.userId}/grab`).pipe(
      map((response) => {
        if (response.success === true) {
          return fetchAppleSuccess(response.user);
        }
        return showErrMessage(response.message || 'Something went wrong');
      }),
      catchError((error) => showErrMessage(error.xhr.response || 'Something went wrong')),
    )
  )),
);

export const resetApplesEpic = (action$) => action$.pipe(
  ofType(RESET_APPLES),
  throttleTime(3000),
  mergeMap((action) => ajax.getJSON(`${CORS}${urlAlyce}apples/free`).pipe(
    mergeMap((response) => {
      if (response.success === true) {
        return of(fetchUsers(), fetchBasket());
      }
      return showErrMessage(response.message || 'Something went wrong');
    }),
    catchError((error) => showErrMessage(error.xhr.response || 'Something went wrong')),
  )),
);

export const clearErrMessageEpic = (action$) => action$.pipe(
  ofType(SHOW_ERR_MESSAGE),
  throttleTime(5000),
  delay(5000),
  mapTo(clearErrMessage()),
);
