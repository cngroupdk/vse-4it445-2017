import React, { Component } from 'react';
import { ContactListItem } from '../components/ContactList/ContactListItem';

const people = {
  sales: [
    {
      id: 1,
      name: 'Karel Karamel',
      email: 'karamel@example.com',
    },
    {
      id: 2,
      name: 'Ota Lopata',
      email: 'lopata@example.com',
    },
  ],
  marketing: [
    {
      id: 1,
      name: 'Karel Karamel',
      email: 'karamel@example.com',
    },
  ],
};

export class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h3>Sales</h3>
          {people.sales.map(person => <ContactListItem person={person} key={person.id}/>)}
        </div>
        <div>
          <h3>Marketing</h3>
          {people.marketing.map(person => <ContactListItem person={person} key={person.id}/>)}
        </div>
        <div>
          <h3>Claims</h3>
          
        </div>
        <p>Contact us.</p>
      </div>
    );
  }
}
