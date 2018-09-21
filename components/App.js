var contacts = [
  {
    id: 1,
    firstName: 'Joe',
    lastName: 'Doe',
    email: 'jdoe@example.com'
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Smith',
    email: 'asmith@example.org'
  },
  {
    id: 3,
    firstName: 'Timothy',
    lastName: 'Blum',
    email: 'tblum@example.net'
  },
];

var ContactForm = {
  firstName: '',
  lastName: '',
  email: '',
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: ContactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});