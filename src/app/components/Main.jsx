import React from 'react';
import { Link } from 'react-router'

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
     <div>
        {this.props.children || "Hi I am apple"}
        <Link to='about'>About</Link>
        <Link to='inbox'>Inbox</Link>
     </div>
     );
  }
}

export default Main;
