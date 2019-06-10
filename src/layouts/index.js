import React from 'react';
import styles from './index.css';
import NavBar from '@/components/NavBar/NavBar';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <NavBar/>
      {props.children}
    </div>
  );
}

export default BasicLayout;
