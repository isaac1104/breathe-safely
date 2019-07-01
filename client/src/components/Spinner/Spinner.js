import React from 'react';
import { Icon, Spin } from 'antd';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.SpinnerContainer}>
      <Spin indicator={<Icon type='loading' />} />
    </div>
  );
}

export default Spinner;