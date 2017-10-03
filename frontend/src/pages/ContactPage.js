import React, { Component } from 'react';
import axios from 'axios';

import { ContactListItem } from '../components/ContactList/ContactListItem';

export class ContactPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      salesContacts: [],
      marketingContacts: [],
    };
  }

  componentDidMount() {
    axios.get(`http://dev.backend.USERNAME.vse.handson.pro//contacts/department?q=sales`)
      .then(res => {
        const { contacts } = res.data || [];
        this.setState({ salesContacts: contacts })
      });
    axios.get(`http://dev.backend.USERNAME.vse.handson.pro/contacts/department?q=marketing`)
      .then(res => {
        const { contacts } = res.data || [];
        this.setState({ marketingContacts: contacts })
      });
  }

  render() {
    const { salesContacts, marketingContacts } = this.state;
    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h3>Sales</h3>
          {salesContacts.map(person =>
            <ContactListItem person={person} key={person.id}/>
          )}
        </div>
        <div>
          <h3>Marketing</h3>
          {marketingContacts.map(person =>
            <ContactListItem person={person} key={person.id}/>
          )}
        </div>
        <div>
          <h3>Claims</h3>

        </div>
        <p>Contact us.</p>
      </div>
    );
  }
}
