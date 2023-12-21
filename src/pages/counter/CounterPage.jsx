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

  const handleRetry = () => {
    dispatch(load())
  }

  return (
    <CounterWidget
      counter={counter}
      isLoading={isLoading}
      isError={isError}
      handleDecrementBtnClick={handleIncrement}
      handleIncrementBtnClick={handleDecrement}
      handleResetBtnClick={handleReset}
      handleRetryBtnClick={handleRetry}
    />
  )
}

export default CounterPage
