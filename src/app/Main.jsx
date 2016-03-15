/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';

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
        Hi I am apple
     </div>
    );
  }
}

export default Main;
