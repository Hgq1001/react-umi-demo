/**
 * @Author:hgq
 * @Describe: 首页
 */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Calendar from '@/components/Calendar/Calendar';
import { Button, Modal } from 'antd';
import * as utils from '@/utils/utils';

const Home = ({ dispatch, calendarModel }) => {

  const [calendarVisible, setCalendarVisible] = useState(true);

  const changeCalendarVisible = () => {
    setCalendarVisible(!calendarVisible);
  };

  return (
    <div className={styles.home}>
      <Button type="default" onClick={() => {
        changeCalendarVisible();
      }}>
        {utils.getDate()}
      </Button>
      {calendarVisible && <Calendar/>}
    </div>
  );
};

export default connect((store) => ({
  calendarModel: store.calendarModel,
}))(Home);
