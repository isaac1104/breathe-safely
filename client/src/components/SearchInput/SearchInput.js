import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { Input } from 'antd';
import { fetchAirQualityData } from '../../actions';

const { Search } = Input;

class SearchInput extends Component {
  formSubmit = ({ location }) => {
    this.props.fetchAirQualityData(location.trim());
  }

  renderInput = ({ input }) => {
    return (
      <Search
        {...input}
        autoComplete='off'
        placeholder='Enter A City Name'
        onFocus={event => event.target.select()}
      />
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='location'
          component={this.renderInput}
        />
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.location) {
    errors.location = 'Location is required!'
  }
  return errors;
};

export default compose(connect(null, { fetchAirQualityData }), reduxForm({ validate, form: 'location' }))(SearchInput);