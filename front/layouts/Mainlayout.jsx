import React from 'react';
import styles from './mainlayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
