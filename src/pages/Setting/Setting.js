/**
 * @Author:hgq
 * @Describe:
 */
import React, { useState, useEffect, useReducer } from 'react';
import { Button } from 'antd';

const Setting = () => {

  const initCount = 0;

  const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'increase':
        return state + 1;
        break;
      case 'reduce':
        return state - 1;
        break;
      case 'reset':
        return 0;
      default:
        throw new Error('there is no type');
    }
  };

  // const [state, dispatch] = useReducer(reducer, initCount);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNum(c => c + 1);
    }, 2000);
    return () => clearInterval(id);
  }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <Button onClick={() => {
      }}>PAUSE</Button>
      {/*<h1>{state}</h1>*/}
      {/*<Button onClick={() => dispatch({ type: 'increase' })}>INCREASE</Button>*/}
      {/*<Button onClick={() => dispatch({ type: 'reduce' })}>REDUCE</Button>*/}
      {/*<Button onClick={() => dispatch({ type: 'reset' })}>RESET</Button>*/}
    </div>
  );
};

export default Setting;
