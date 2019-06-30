import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAirQualityData } from '../../actions';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Home.module.css';

class Home extends Component {
  componentDidMount() {
    // this.props.fetchAirQualityData();
  }

  render() {
    console.log(this.props.air_data);

    return (
      <div className={styles.HomeContainer}>
        <SearchInput />
      </div>
    );
  }
}

const mapStateToProps = ({ air_data }) => {
  return {
    air_data
  };
};

export default connect(mapStateToProps, { fetchAirQualityData })(Home);