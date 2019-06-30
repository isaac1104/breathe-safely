import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchAirQualityData } from '../../actions';
import { Input } from 'antd';

const { Search } = Input;

class SearchInput extends Component {
  formSubmit = ({ location }) => {
    this.props.fetchAirQualityData(location);
  }

  renderInput = ({ input }) => {
    return (
      <Search
        {...input}
        autoComplete='off'
        placeholder='Enter A Location'
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

export default compose(withRouter, reduxForm({ validate, form: 'location' }), connect(null, { fetchAirQualityData }))(SearchInput);