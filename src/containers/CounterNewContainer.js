import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import CounterNew from '../components/CounterNew'
import {increase, decrease} from '../modules/counterNew'


function CounterNewContainer () {
  const number = useSelector(state=>state.number, [])
  const dispatch = useDispatch();

  const onIncrease = () =>{
    dispatch(increase())
  }
  const onDecrease = () =>{
    dispatch(decrease())
  }


  return (
    <CounterNew 
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}

export default CounterNewContainer