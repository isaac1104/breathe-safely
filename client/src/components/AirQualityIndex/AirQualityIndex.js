import React from 'react';
import styles from './AirQualityIndex.module.css';
import { Typography } from 'antd';

const AirQualityIndex = ({ color = '#000000', description = '' }) => {
  return (
    <div className={styles.AirQualityIndexContainer}>
      <div className={styles.AirQualityIndex} style={{ backgroundColor: color }} />
      <Typography>{description}</Typography>
    </div>
  );
};

export default AirQualityIndex;