/**
 * @Author:hgq
 * @Describe: 首页
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Calendar from '@/components/Calendar/Calendar';
import { Button, Modal } from 'antd';
import * as utils from '@/utils/utils';
import arrayUtils from '@/utils/ArrayUtils';

const appressBooks = [
  { id: 111, title: 'C# 6.0', author: 'ANDREW TROELSEN', rating: [4.7], 'reviews': [{ good: 4, excellent: 12 }] },
  { id: 222, title: 'Efficient Learning Machines', author: 'Rahul Khanna', rating: [4.5], 'reviews': [] },
  { id: 333, title: 'Pro AngularJS', author: 'Adam Freeman', rating: [4.6], 'reviews': [] },
  { id: 444, title: 'Pro ASP.NET', author: 'Adam Freeman', rating: [4.2], 'reviews': [{ good: 14, excellent: 12 }] },
];

const Home = ({ dispatch, calendarModel }) => {

  const [calendarVisible, setCalendarVisible] = useState(true);

  const changeCalendarVisible = () => {
    setCalendarVisible(!calendarVisible);
  };

  const multiply = (x, y, z) => x + y + z;

  useEffect(() => {
    console.log('curry--->', utils.curry(multiply)(1)(2)(3));
    console.log('filter---->', arrayUtils.filter(appressBooks, (book) => book.rating[0] > 4.5));
    console.log('map---->', arrayUtils.map(appressBooks, (book) => {
      return { title: book.title, author: book.author };
    }));
    console.log('every-->', utils.every([1, 2, 3], (item) => item > 2));
    console.log('some-->', utils.some([1, 2, 3], (item) => item > 2));
    console.log('forEachObject-->', utils.forEachObject({
      name: '蛋糕',
      age: 1,
    }, (key, value) => console.log(key + '：' + value)));
  });

  return (
    <div className={styles.home}>
      <Button type="default" onClick={() => {
        changeCalendarVisible();
      }}>
        {utils.getDate()}
      </Button>
      {/*{calendarVisible && <Calendar/>}*/}
    </div>
  );
};

export default connect((store) => ({
  calendarModel: store.calendarModel,
}))(Home);
