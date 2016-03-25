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

  componentWillMount() {
    console.log(this.props.actions)
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

Main.propTypes = {
    states: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
};

export default Main;
