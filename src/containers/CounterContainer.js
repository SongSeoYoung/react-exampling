//컨테이너 컴포넌트

import React from 'react';
import Counter from '../components/Counter';
import {useSelector, useDispatch} from 'react-redux'
//useSelector : 상태를 조회하는 Hook
//useDispatch : 컴포넌트 내에서 디스패치를 사용

//불러올 액션 함수들 
import {increase} from '../modules/counter';
import {decrease} from '../modules/counter'
import {setDiff} from '../modules/counter'

//상태를 조회하는 함수
function CounterContainer() {
  const {number, diff} = useSelector(state => ({
    number : state.counter.number,
    diff : state.counter.diff
  }));

  const dispatch = useDispatch();

  //여기서 increase(), decrease(), setDiff는 다 moudles에 미리 만들어두었던 액션 함수를 말한다. 
  //디스패치는 액션함수로 만들어진 액션을 스토어에 보내는 것인 점을 까먹지 말자ㅜㅜ 어려워,,,
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number = {number}
      diff = {diff}
      onIncrease = {onIncrease}
      onDecrease = {onDecrease}
      onSetDiff = {onSetDiff}
    />
  )
}

export default CounterContainer;