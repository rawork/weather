import React, {Component} from 'react';

export class Link extends Component {
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (evt) => {
    evt.preventDefault()
    this.context.linkHandler(this.props.to)
  }

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : '';
    return <a className={activeClass} onClick={this.handleClick} href={this.props.to}>{this.props.children}</a>
  }
}

Link.protoTypes = {
  to: React.PropTypes.string.isRequired
}