import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import CounterNew from '../components/CounterNew'
import {increase, decrease} from '../modules/counterNew'


function CounterNewContainer () {
  const counter = useSelector(state => state.counter, [])
  const dispatch = useDispatch();

  const onIncrease = () =>{
    dispatch(increase())
  }
  const onDecrease = () =>{
    dispatch(decrease())
  }


  return (
    <CounterNew 
      number={counter}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}

export default CounterNewContainer