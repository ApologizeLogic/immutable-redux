import React from 'react';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        {this.props.children || "Hi I am apple"}
      </div>
     );
  }
}

export default Main;
