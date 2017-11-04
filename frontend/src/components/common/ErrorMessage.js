import React from 'react';

const ErrorMessage = ({ error }) => (
  <div>
    <h2>Error</h2>
    <div>{`${error}`}</div>
  </div>
);

export default ErrorMessage;
