var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
      React.createElement('label', {htmlFor: 'fName'}, 'First name: '),
      React.createElement('input', {
        type: 'text',
        id: 'fName',
        placeholder: 'First name',
        value: this.props.contact.firstName,
      }),
      React.createElement('label', {htmlFor: 'lName'}, 'Last name: '),
      React.createElement('input', {
        type: 'text',
        id: 'lName',
        placeholder: 'Last name',
        value: this.props.contact.lastName,
      }),
      React.createElement('label', {htmlFor: 'email'}, 'Email: '),
      React.createElement('input', {
        type: 'text',
        id: 'email',
        placeholder: 'Email',
        value: this.props.contact.email,
      }),
      React.createElement('button', {type: 'submit'}, 'Add contact')
      )
    )
  },
})