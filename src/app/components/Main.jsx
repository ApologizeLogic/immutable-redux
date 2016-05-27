import React from 'react';
import { addClass, removeClass } from '../utils/ReactKit'

let initialScroll, shareWrapH

// from http://www.sberry.me/articles/javascript-event-throttling-debouncing
function throttle(fn, delay) {
  let allowSample = true;

  return function(e) {
    if (allowSample) {
      allowSample = false;
      setTimeout(function() { allowSample = true; }, delay);
      fn(e);
    }
  };
}

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.addListener = this.addListener.bind(this);
    this._touchStart = this.touchStart.bind(this);
    this._touchMove = this.touchMove.bind(this);
    this._touchEnd = this.touchEnd.bind(this);

    this.state = {
      open: false,
      opacity: 0,
      blur: 0,
      firstTouchX: 0,
    };
  }

  componentDidMount() {
    //this.addListener()
  }

  addListener() {
    let touchBody = this.refs.touchbody
    touchBody.addEventListener('touchstart', this._touchStart);
    touchBody.addEventListener('touchmove', this._touchMove);
    touchBody.addEventListener('touchend', this._touchEnd);
  }

  touchStart(ev) {
    let touchobj = ev.changedTouches[0]

    this.state.firstTouchX = parseInt(touchobj.clientX);
    //initialScroll = window.pageXOffset;

  }

  touchMove(ev) {
    let moving = () => {
      let touchobj = ev.changedTouches[0]
      let touchX = parseInt(touchobj.clientX)
      let touchXDelta = touchX - this.state.firstTouchX

      if ( touchXDelta > 50  ) {
        ev.preventDefault();

        this.setState({
          opacity: touchXDelta/300,
          blur: touchXDelta/300 * 20,
        })
      } else if ( touchXDelta < 0 ) {
        this.state.firstTouchX = touchX
        return
      }

    }

    throttle(moving(), 60)
  }

  touchEnd() {
    this.setState({
      opacity: 0,
      blur: 0,
    })
  }

  render() {
    let menuStyle = {
      opacity: this.state.opacity,
      //WebkitFilter: `blur(${this.state.blur}px)`,
      transition: this.state.opacity === 0 ? `all .5s ease` : `initial`,
    }

    let bodyStyle = {
      WebkitFilter: `blur(${this.state.blur}px)`,
      transition: this.state.opacity === 0 ? `all .5s ease` : `initial`,
    }

    return (
      <div style={bodyStyle} ref='touchbody'>
        <div className='touch-menu' style={menuStyle}></div>
        {this.props.children || "Hi I am apple"}
      </div>
     );
  }
}

export default Main;
