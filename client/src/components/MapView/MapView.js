import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAirQualityData } from '../../actions';
import SearchInput from '../SearchInput/SearchInput';
import Spinner from '../Spinner/Spinner';
import styles from './MapView.module.css';

class MapView extends Component {
  componentDidMount() {
    this.props.fetchAirQualityData(this.props.match.params.city);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.city !== prevProps.match.params.city) {
      this.props.fetchAirQualityData(this.props.match.params.city);
    }
  }

  renderMap() {
    const { is_fetching } = this.props.air_data;
    if (is_fetching) {
      return <Spinner />;
    }
    return (
      <div>
        <div className={styles.SearchInput}>
          <SearchInput />
        </div>
        <h1>Display data for {this.props.match.params.city}</h1>
      </div>
    );
  }

  render() {
    console.log(this.props.air_data);
    return (
      <div className={styles.MapViewContainer}>
        {this.renderMap()}
      </div>
    );
  }
}

const mapStateToProps = ({ air_data }) => {
  return {
    air_data
  };
};

export default connect(mapStateToProps, { fetchAirQualityData })(MapView);