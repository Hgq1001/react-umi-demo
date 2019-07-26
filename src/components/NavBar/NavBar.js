/**
 * @Author:hgq
 * @Describe:
 */
import React from 'react';
import { Link } from 'umi';

const NavBarInfo = [
  { path: '/home', name: '首页' },
  { path: '/about', name: '关于' },
  { path: '/setting', name: '设置' },
];

const NavBar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '60px', alignItems: 'center' }}>
      {NavBarInfo.map((item, index) => {
        return <div style={{ minWidth: '150px', margin: '0 20px' }} key={index}>
          <Link to={item.path}>{item.name}</Link>
        </div>;
      })}
    </div>
  );
};

export default NavBar;
