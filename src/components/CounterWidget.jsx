import React from 'react';

export function CounterWidget({
    counter,
    isError,
    isLoading, 
    handleDecrementBtnClick, 
    handleIncrementBtnClick,
    handleResetBtnClick, 
    handleSaveBtnClick, 
    handleRetryBtnClick
}) {
    if (isLoading) {
        return(
            <div>
                <p>Загрузка...</p>
            </div>
        )
    }

    if (isError) {
        return(
            <div>
                <p>Ошибка</p>
                <button onClick={handleRetryBtnClick}>Повторить</button>
            </div>
        )
    }

    return ( 
        <div>
            {counter}
            <button onClick={handleDecrementBtnClick}>-1</button>
            <button onClick={handleIncrementBtnClick}>+1</button>
            <button onClick={handleResetBtnClick}>Обновить счетчик</button>
            <button onClick={handleSaveBtnClick}>Сохранить счетчик</button>
        </div>
     );
}

 