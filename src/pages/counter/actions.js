import {
    COUNTER_DECREMENT, 
    COUNTER_INCREMENT, 
    COUNTER_RESET,
    COUNTER_SAVE_LOADING,
    COUNTER_SAVE_LOADING_SUCCESS,
    COUNTER_SAVE_LOADING_ERROR,
    COUNTER_LOADING,
    COUNTER_LOADING_SUCCESS,
    COUNTER_LOADING_ERROR

} from './constants.js'

import { API } from './api.js'

export const load = () => {
    return (dispath) => {
        dispath({
            type: COUNTER_LOADING
        });
        
        API.getCounter()
            .then(data => {
                dispath({
                    type: COUNTER_LOADING_SUCCESS,
                    payload: data.counter
                })
            })
            .catch(error => {
                dispath({
                    type: COUNTER_LOADING_ERROR
                });
            })
    }
}

export const save = (counter) => {
    return (dispath) => {
        dispath({
            type: COUNTER_SAVE_LOADING,
        })
        API.saveCounter(counter)
        .then(() => {
            dispath({
                type: COUNTER_SAVE_LOADING_SUCCESS,
            })
            
            console.log(data);
        })
        .catch(() => {
            dispath({
                type: COUNTER_SAVE_LOADING_ERROR,
            })
    })}
    
}

export const increment = () => {
    return {
        type: COUNTER_INCREMENT
    }
}

export const decrement = () => {
    return {
        type: COUNTER_DECREMENT
    }
}

export const reset = () => {
    return {
        type: COUNTER_RESET
    }
}