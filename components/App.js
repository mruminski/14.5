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

var contactForm = {
  firstName: '',
  lastName: '',
  email: '',
};

var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        <ContactForm contact = {contactForm}/>
        <Contacts items = {contacts}/>
      </div>
    );
  }
});
