import {
    FETCH_USERS_SUCCESS,
    FETCH_BASKET_SUCCESS,
    FETCH_APPLE_SUCCESS,
    SHOW_ERR_MESSAGE,
    CLEAR_ERR_MESSAGE
} from '../actions/actions'

const initialState = {
    users: [
        {
            id: 0,
            userName: 'TestUser',
            apples: []
        }
    ],
    basket: ['Apple0'],
    error: null
}


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                error: state.error
            }
        case FETCH_BASKET_SUCCESS:
            return {
                ...state,
                basket: action.basket,
                error: state.error
            }
        case FETCH_APPLE_SUCCESS:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            apples: action.apples
                        }
                    }
                    return user
                }),
                error: state.error
            }
        case SHOW_ERR_MESSAGE:
            return {
                ...state,
                error: action.errMessage
            }
        case CLEAR_ERR_MESSAGE:
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
};

export default rootReducer;