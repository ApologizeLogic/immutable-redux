import React from 'react';

class ShowCase extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
     <div>
        Hi I am iPhoneSE
     </div>
     );
  }
}

// ShowCase.propTypes = {
//     states: React.PropTypes.object.isRequired,
//     actions: React.PropTypes.object.isRequired,
// };

export default ShowCase;