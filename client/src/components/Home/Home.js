import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Spin, Icon } from 'antd';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Home.module.css';

const { Title } = Typography;

class Home extends Component {
  renderLoading() {
    const { is_fetching } = this.props.air_data;
    if (is_fetching) {
      return (
        <Spin indicator={
          <Icon
            type='loading'
            className={styles.SpinnerIcon}
          />
        }
        />
      );
    }
    return <SearchInput />;
  }

  render() {
    console.log(this.props.air_data.data);

    return (
      <div className={styles.HomeContainer}>
        <div>
          <Title><span role='img' aria-label='emoji-leaf'>🍃</span> Breathe Safely</Title>
          {this.renderLoading()}
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