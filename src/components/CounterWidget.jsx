import React from 'react';

export function CounterWidget({
    counter, 
    handleDecrementBtnClick, 
    handleIncrementBtnClick,
    handleResetBtnClick
}) {
    return ( 
        <div>
            {counter}
            <button onClick={handleDecrementBtnClick}>-1</button>
            <button onClick={handleIncrementBtnClick}>+1</button>
            <button onClick={handleResetBtnClick}>Обновить счетчик</button>
        </div>
     );
}

 