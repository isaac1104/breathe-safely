import React, { Component } from 'react';
import { Typography } from 'antd';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Home.module.css';

const { Title } = Typography;

class Home extends Component {
  render() {
    return (
      <div className={styles.HomeContainer}>
        <div>
          <Title><span role='img' aria-label='emoji-leaf'>🍃</span> Breathe Safely</Title>
          <SearchInput />
        </div>
      </div>
    );
  }
}

export default Home;