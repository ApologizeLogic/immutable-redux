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

  // static propTypes = {
  //   states: React.PropTypes.object.isRequired,
  //   action: React.PropTypes.object.isRequired,
  // }

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
    console.log(this.props.actions)
    return (
     <div>
        Hi I am apple
     </div>
    );
  }
}

export default Main;
