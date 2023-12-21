import {
    COUNTER_DECREMENT, 
    COUNTER_INCREMENT, 
    COUNTER_RESET,
    COUNTER_SAVE,
    COUNTER_LOADING,
    COUNTER_LOADING_SUCCESS,
    COUNTER_LOADING_ERROR

} from './constants.js'

const initialState = {
    value: null, 
    isLoading: false, 
    isError: false
}

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTER_LOADING:
            return {
                ...state, 
                isLoading: true,
                isError: false
            }

        case COUNTER_LOADING_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                value: action.payload
            }

        case COUNTER_LOADING_ERROR:
            return {
                ...state, 
                isLoading: false, 
                isError: true
            }

        case COUNTER_INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }

        case COUNTER_DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }

        case COUNTER_RESET:
            return {
                ...state,
                value: 0
            }

        case COUNTER_SAVE:
            return {
                ...state, 
                value: state.value, 

            }


        default:
            return {
                ...state
            }
    }
}