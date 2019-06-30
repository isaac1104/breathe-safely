import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Home.module.css';

const { Title } = Typography;

class Home extends Component {
  render() {
    console.log(this.props.air_data);

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

const mapStateToProps = ({ air_data }) => {
  return {
    air_data
  };
};

export default connect(mapStateToProps)(Home);