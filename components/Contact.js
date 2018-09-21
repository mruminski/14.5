var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      'div',
      { className: 'contactItem' },
      React.createElement('img', {
        className: 'contactImg',
        src:
          'https://openclipart.org/image/300px/svg_to_png/202776/pawn.png',
        alt: 'Contact image'
      }),
      React.createElement(
        'p',
        {
          className: 'label'
        },
        'First name: ' + this.props.item.firstName
      ),
      React.createElement(
        'p',
        {
          className: 'label'
        },
        'Last Name: ' + this.props.item.lastName
      ),
      React.createElement(
        'a', 
        {
          className: 'emailLabel',
          href: 'mailto:' + this.props.item.email
        },
        this.props.item.email
      ),
    );
  }
});
