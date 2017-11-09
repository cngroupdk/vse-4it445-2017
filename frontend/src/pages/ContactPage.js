import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../api.js';
import { ContactListItem } from '../components/ContactList/ContactListItem';
import { ContactForm } from '../components/organisms/ContactForm';
import {
  formInputChange,
  formReset,
} from '../components/ContactForm/actions';
import {
  getContactFormState,
  getValues,
} from '../components/ContactForm/reducer';


export class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salesContacts: [],
      marketingContacts: [],
      values: {
        name: 'John Doe',
        email: 'john@doe.com',
        message: 'Hi, my name is Joe.'
      },
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
    const { formInputChange } = this.props;
    formInputChange(id, value);

    this.setState(({ values }) => ({
      values: {
        ...values,
        [id]: value,
      }
    }));
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { formReset } = this.props;

    formReset();

    console.log('ContactPage onSubmit');

    api.post(`/contact-reqest`, { email: "hello@world.com" }).then(res => {
      const { message } = res.data;
      console.log('/contact-reqest response message', message);
    });
  }

  render() {
    const { salesContacts, marketingContacts } = this.state;
    const { values } = this.props;

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h2>Contact Us</h2>
          <pre>{JSON.stringify(values, null, 2)}</pre>
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
  const values = getValues(contactForm);

  return {
    values,
  };
}

export default connect(
  mapStateToProps,
  {
    formInputChange,
    formReset,
  }
)(ContactPage);
