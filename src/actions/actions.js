export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_BASKET = 'FETCH_BASKET';
export const FETCH_BASKET_SUCCESS = 'FETCH_BASKET_SUCCESS';
export const FETCH_APPLE = 'FETCH_APPLE';
export const FETCH_APPLE_SUCCESS = 'FETCH_APPLE_SUCCESS';
export const RESET_APPLES = 'RESET_APPLES';
export const RESET_APPLES_SUCCESS = 'RESET_APPLES_SUCCESS';
export const SHOW_ERR_MESSAGE = 'SHOW_ERR_MESSAGE';
export const CLEAR_ERR_MESSAGE = 'CLEAR_ERR_MESSAGE';


export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchBasket = () => ({
  type: FETCH_BASKET,
});

export const fetchBasketSuccess = (basket) => ({
  type: FETCH_BASKET_SUCCESS,
  basket,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

export const fetchApple = (userId) => ({
  type: FETCH_APPLE,
  userId,
});

export const fetchAppleSuccess = ({ id, apples }) => ({
  type: FETCH_APPLE_SUCCESS,
  id,
  apples,
});

export const resetApples = () => ({
  type: RESET_APPLES,
});

export const resetApplesSuccess = () => ({
  type: RESET_APPLES_SUCCESS,
});

export const showErrMessage = (errMessage) => ({
  type: SHOW_ERR_MESSAGE,
  errMessage,
});

export const clearErrMessage = () => ({
  type: CLEAR_ERR_MESSAGE,
});
