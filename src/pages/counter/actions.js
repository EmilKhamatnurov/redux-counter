import {
    COUNTER_DECREMENT, 
    COUNTER_INCREMENT, 
    COUNTER_RESET,
    COUNTER_SAVE,
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

export const save = () => {
    return (dispath) => {
        dispath({
            type: COUNTER_SAVE,
        })
        API.saveCounter()
        .then(data => {
            dispath({
                type: COUNTER_SAVE,
            })
            
            console.log(data);
        })
        .catch(error => {
            console.log(error);
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