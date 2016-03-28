import React from 'react';

class ShowList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    //console.log(this.props.actions)
  }

  render() {
    return (
     <div>
        Hi I am iPhone5S
     </div>
     );
  }
}

// ShowList.propTypes = {
//     states: React.PropTypes.object.isRequired,
//     actions: React.PropTypes.object.isRequired,
// };

export default ShowList;