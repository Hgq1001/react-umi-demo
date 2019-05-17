/**
 * @Author:hgq
 * @Describe:
 */
import React, { useState, useEffect, useRef } from 'react';
import styles from './Clock.css';
import { connect } from 'dva';
import * as utils from '@/utils/utils';
import { Popover, Button } from 'antd';

export default function Clock() {

  const [currentTime, setCurrentTime] = useState(utils.getTime());
  const [isPause, setPause] = useState(false);
  const timerIdRef = useRef(null);


  useEffect(() => {
    if (isPause) {
      clearInterval(timerIdRef.current);
    } else {
      const id = setInterval(() => {
        setCurrentTime(utils.getTime());
      }, 1000);
      timerIdRef.current = id;
    }
    return () => clearInterval(timerIdRef.current);
  }, [isPause]);

  const pause = () => {
    setPause(!isPause);
  };

  return (
    <div style={{ display: 'flex', color: 'white' }}>
      {currentTime}
      {/*<p>Status--{isPause ? '启动' : '暂停'}</p>*/}
      {/*<button onClick={() => pause()}>暂停</button>*/}
    </div>
  );
};

