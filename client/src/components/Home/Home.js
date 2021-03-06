import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Typography, Icon, Spin, Divider } from 'antd';
import AirQualityIndex from '../AirQualityIndex/AirQualityIndex';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Home.module.css';

const { Title } = Typography;

const AQIndex = [
  { color: '#009966', description: '0-50 Good' },
  { color: '#ffdd33', description: '51-100 Moderate' },
  { color: '#ff9833', description: '101-150 Unhealthy for Sensitive Groups' },
  { color: '#cc0033', description: '151-200 Unhealthy' },
  { color: '#660099', description: '201-300 Very Unhealthy' },
  { color: '#7d0023', description: '300+ Hazardous' },
];

class Home extends Component {
  renderSearchInput() {
    const { is_fetching } = this.props.air_data;
    if (is_fetching) {
      return null;
    }
    return (
      <>
        <Title className={styles.AppTitle}><span role='img' aria-label='emoji-leaf'>🍃</span> Breathe Safely</Title>
        <div className={styles.SearchInput}>
          <SearchInput />
        </div>
      </>
    );
  }

  renderAirQulityIndex(array) {
    return array.map(({ color, description }) => (
      <AirQualityIndex
        key={color}
        color={color}
        description={description}
      />
    ));
  }

  handleAirQualityValueColor(value) {
    let color;
    if (value < 51) {
      color = '#009966';
    } else if (value < 101) {
      color = '#ffdd33';
    } else if (value < 151) {
      color = '#ff9833';
    } else if (value < 201) {
      color = '#cc0033';
    } else if (value < 301) {
      color = '#660099';
    } else if (value => 301) {
      color = '#7d0023';
    } else {
      color = '#000000';
    }
    return (
      <Typography
        style={{ color }}
      >
        {value}
      </Typography>
    );
  }

  renderAirQualityData() {
    const { is_fetching, data } = this.props.air_data;
    if (is_fetching) {
      return (
        <div className={styles.SpinnerContainer}>
          <Spin indicator={<Icon type='loading' />} />
        </div>
      );
    }
    if (data === 'Unknown station') {
      return (
        <div>
          <Typography className={styles.NotFoundText}>
            <Icon type='warning' /> Unknown station. Please search for another city.
          </Typography>
        </div>
      );
    }
    if (data.city) {
      return (
        <Card title={`Air Quality In ${data.city.name}`}>
          <Typography>Last Updated: {data.time ? data.time.s : 'N/A'}</Typography>
          <div className={styles.PMLevelContainer}>
            <Typography>PM 2.5 Level: </Typography>
            <Typography className={styles.PMLevelValue}>{data.iaqi.pm25 ? this.handleAirQualityValueColor(data.iaqi.pm25.v) : 'N/A'}</Typography>
          </div>
          <div className={styles.PMLevelContainer}>
            <Typography>PM 1.0 Level: </Typography>
            <Typography className={styles.PMLevelValue}>{data.iaqi.pm10 ? this.handleAirQualityValueColor(data.iaqi.pm10.v) : 'N/A'}</Typography>
          </div>
          <Divider />
          {this.renderAirQulityIndex(AQIndex)}
        </Card>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={styles.HomeContainer}>
        <div className={styles.AirQualityDataCardContainer}>
          {this.renderSearchInput()}
          {this.renderAirQualityData()}
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