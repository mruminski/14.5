var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      "div",
      { className: "contactItem" },
      React.createElement("img", {
        className: "contactImg",
        src:
          "http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico",
        alt: "Contact image"
      }),
      React.createElement(
        "p",
        {
          className: "label"
        },
        "First name: " + this.props.item.firstName
      ),
      React.createElement(
        "p",
        {
          className: "label"
        },
        "Last Mame: " + this.props.item.lastName
      ),
      React.createElement(
        "p",
        {
          className: "label"
        },
        "Name: " + this.props.item.firstName
      ),
      React.createElement("a", {
        className: "emailLabel",
        href: "mailto:" + this.props.item.firstName
      })
    );
  }
});
