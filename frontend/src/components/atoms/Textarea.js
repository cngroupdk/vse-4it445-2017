import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Textarea extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
  };

  render() {
    const {
      id,
      placeholder,
      rows,
      value,
      ...rest,
    } = this.props;

    return (
      <textarea
        className="form-control"
        id={id}
        placeholder={placeholder}
        rows={rows || 5}
        value={value}
        {...rest}
      />
    );
  }
}
