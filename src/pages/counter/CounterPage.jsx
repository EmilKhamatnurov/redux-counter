import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  getCounter, 
  getIsLoading, 
  getIsError } from './selectors.js';
import {
  increment, 
  decrement, 
  reset,
  load,
  save 
  } from './actions.js'
import {CounterWidget} from '../../components/CounterWidget.jsx'

function CounterPage() {
  const counter = useSelector(getCounter)
  const isLoading = useSelector(getIsLoading)
  const isError = useSelector(getIsError)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load())
  }, []); 

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }
  
  const handleSave = () => {
    dispatch(save())
  }

  const handleRetry = () => {
    dispatch(load())
  }

  return (
    <CounterWidget
      counter={counter}
      isLoading={isLoading}
      isError={isError}
      handleDecrementBtnClick={handleDecrement}
      handleIncrementBtnClick={handleIncrement}
      handleResetBtnClick={handleReset}
      handleSaveBtnClick={handleSave}
      handleRetryBtnClick={handleRetry}
    />
  )
}

export default CounterPage
