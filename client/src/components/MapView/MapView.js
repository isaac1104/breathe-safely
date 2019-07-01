import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import { Icon, Typography } from 'antd';
import { fetchAirQualityData } from '../../actions';
import SearchInput from '../SearchInput/SearchInput';
import Spinner from '../Spinner/Spinner';
import styles from './MapView.module.css';

const { Title } = Typography;

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
    const { is_fetching, data } = this.props.air_data;
    if (is_fetching) {
      return <Spinner />;
    }

    if (data) {
      if (data.city) {
        return (
          <div className={styles.MapContainer}>
            <div className={styles.SearchInputContainer}>
              <SearchInput />
            </div>
            <Map center={data.city.geo} zoom={12} />
          </div>
        );
      } else {
        return (
          <div className={styles.NotFoundContainer}>
            <div>
              <Title
                level={3}
                className={styles.NotFoundText}
              >
                <Icon type='warning' /> Unknown station. Please search for another city.
              </Title>
              <div className={styles.NotFoundSearchInputContainer}>
                <SearchInput />
              </div>
            </div>
          </div>
        );
      }
    }

    return null;
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