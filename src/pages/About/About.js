/**
 * @Author:hgq
 * @Describe:
 */
import React, { useState, useEffect } from 'react';
import * as utils from '@/utils/utils';

function About() {


  const scrollFn = () => {
    console.log(new Date().getSeconds());
  };


  useEffect(() => {
    // window.addEventListener('scroll', utils.debounce(scrollFn, 2000, false));
    window.addEventListener('scroll', utils.throttle(scrollFn, 1000));
    // window.addEventListener('scroll', scrollFn);
  });

  return (
    <div style={{ height: '2500px' }}>
      <div
        id={'div1'}
        style={{
          height: '100px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid ',
          justifyContent: 'center',
        }}>
        {/*{count}*/}
      </div>
    </div>
  );
}

export default About;
