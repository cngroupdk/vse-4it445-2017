import React from 'react';
import { Link } from 'react-router';

export class ContactListItem extends React.Component {
  render() {
    const { name: newname, email, id } = this.props.person;
    return (
      <div>
        <Link to={`/contact/${id}`}>{newname}</Link>
        <p>{email}</p>
      </div>
    )
  }
}
