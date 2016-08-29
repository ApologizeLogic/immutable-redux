import React from 'react';

class ShowList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };

    this.setVideoTime = this.setVideoTime.bind(this);
  }

  componentWillMount() {
    //console.log(this.props.actions)
  }

  componentDidMount() {
    this.refs.modelvideo.play()
  }

  setVideoTime() {
    console.log(this.refs.modelvideo.currentTime)
    //this.refs.modelvideo.currentTime = 34
  }

  render() {
    return (
     <div className='show-video' ref='modelbody' onClick={this.setVideoTime} >
        <video ref='modelvideo' width='540px' controls="controls" src="https://material-design.storage.googleapis.com/publish/material_v_9/0B14F_FSUCc01VDAtSVF3X0F5VTg/MaterialMotionHero_Spec_0505.webm"></video>
     </div>
     );
  }
}

// ShowList.propTypes = {
//     states: React.PropTypes.object.isRequired,
//     actions: React.PropTypes.object.isRequired,
// };

export default ShowList;