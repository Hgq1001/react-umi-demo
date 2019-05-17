/**
 * @Author:hgq
 * @Describe:
 */
import React from 'react';
import styles from './Calendar.css';
import { connect } from 'dva';
import Clock from '../Clock/Clock';
import { Modal } from 'antd';

const Calendar = ({ dispatch, calendarModel }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <Clock/>
      </div>
    </div>
  );
};

export default connect((store) => ({
  calendarModel: store.calendarModel,
}))(Calendar);
