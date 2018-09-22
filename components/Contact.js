var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img 
          className={'contactImg'}
          src={'https://openclipart.org/image/300px/svg_to_png/202776/pawn.png'}
          alt={'Contact image'}/>
        <p className={'label'}>
          First name: {this.props.item.firstName}
        </p>
        <p className={'label'}>
          Last name: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    )
  }
});
