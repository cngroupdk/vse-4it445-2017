import React, { Component } from 'react';

import api from '../api.js';
import { ContactListItem } from '../components/ContactList/ContactListItem';
import { ContactForm } from '../components/organisms/ContactForm';

export class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salesContacts: [],
      marketingContacts: [],
    };
  }

  componentDidMount() {
    api(`/contacts/department?q=sales`).then(res => {
      const { contacts } = res.data || [];
      this.setState({ salesContacts: contacts });
    });
    api(`/contacts/department?q=marketing`).then(res => {
      const { contacts } = res.data || [];
      this.setState({ marketingContacts: contacts });
    });
  }

  onChange = (id, value) => {
    console.log('----> onChange', id, value);
  }

  onSubmit = () => {
    api.post(`/contact-reqest`, { email: "hello@world.com" }).then(res => {
      const { message } = res.data;
      console.log('/contact-reqest response message', message);
    });
  }

  render() {
    const { salesContacts, marketingContacts } = this.state;
    const values = {
      name: 'John Doe',
      email: 'john@doe.com',
      message: 'Hi, my name is Joe.'
    };

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h2>Contact Us</h2>
          <ContactForm
            values={values}
            onChange={this.onChange}
          />
          <hr />
          <h2>Contacts</h2>
          <h3>Sales</h3>
          {salesContacts.map(person => (
            <ContactListItem person={person} key={person.id} />
          ))}
        </div>
        <div>
          <h3>Marketing</h3>
          {marketingContacts.map(person => (
            <ContactListItem person={person} key={person.id} />
          ))}
        </div>
        <div>
          <h3>Claims</h3>
        </div>
      </div>
    );
  }
}
