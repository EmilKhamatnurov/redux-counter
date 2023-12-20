import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  getCounter, 
  getIsLoading, 
  getIsError } from './selectors.js';
import {
  increment, 
  decrement, 
  reset,
  // load, 
  } from './actions.js'
import {CounterWidget} from '../../components/CounterWidget.jsx'

function CounterPage() {
  const counter = useSelector(getCounter)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(load())
  // }, []);

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <CounterWidget
      counter={counter}
      handleDecrementBtnClick={handleIncrement}
      handleIncrementBtnClick={handleDecrement}
      handleResetBtnClick={handleReset}
    />
  )
}

export default CounterPage
