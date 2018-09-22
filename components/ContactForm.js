var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <input 
          type='text'
          placeholder='First name'
          value={this.props.contact.firstName}>
        </input>
        <input 
          type='text'
          placeholder='Last name'
          value={this.props.contact.lastName}>
        </input>
        <input 
          type='text'
          placeholder='Email'
          value={this.props.contact.email}>
        </input>
        <button type='submit'>
          Add contact
        </button>
      </form>
    )
  },
})