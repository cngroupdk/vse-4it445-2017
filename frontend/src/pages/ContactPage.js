import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../api.js';
import { ContactListItem } from '../components/ContactList/ContactListItem';
import { ContactForm } from '../components/organisms/ContactForm';
import {
  fieldChange,
  clearForm,
  submitContactForm,
} from '../components/ContactForm/actions';
import {
  getContactFormState,
  getValues,
  getMessage,
} from '../components/ContactForm/reducer';

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
    const { fieldChange } = this.props;
    fieldChange(id, value);
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { submitContactForm, values } = this.props;
    submitContactForm(values);
  }

  render() {
    const { salesContacts, marketingContacts } = this.state;
    const { values, contactFormMessage } = this.props;

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h2>Contact Us</h2>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
          <p>{contactFormMessage}</p>
          <ContactForm
            values={values}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
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

const mapStateToProps = (storeState) => {
  const contactForm = getContactFormState(storeState);

  return {
    values: getValues(contactForm),
    contactFormMessage: getMessage(contactForm),
  };
}

export default connect(
  mapStateToProps,
  {
    fieldChange,
    clearForm,
    submitContactForm,
  }
)(ContactPage)
