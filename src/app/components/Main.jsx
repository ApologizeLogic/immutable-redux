import React from 'react';
import { addClass, removeClass } from '../utils/ReactKit'

let firstTouchY, initialScroll, shareWrapH

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

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
  }

  addListener() {
    let touchBody = this.refs.touchbody
    touchBody.addEventListener('touchstart', this.touchStart);
    touchBody.addEventListener('touchmove', this.touchMove);
    touchBody.addEventListener('touchend', this.touchEnd);
  }

  touchStart(e) {
    let touchobj = ev.changedTouches[0]

    firstTouchY = parseInt(touchobj.clientY);
    //initialScroll = window.pageYOffset;

  }

  touchMove(e) {
    let moving = () => {
      let touchobj = ev.changedTouches[0]
      let touchY = parseInt(touchobj.clientY)
      let touchYDelta = touchY - firstTouchY

      if ( touchYDelta > 0  ) {
        ev.preventDefault();
      } else if ( touchYDelta < 0 ) {
        firstTouchY = touchY
        return
      }
    }

    throttle(moving(), 60)
  }

  touchEnd() {

  }

  render() {
    return (
      <div ref='touchbody'>
        {this.props.children || "Hi I am apple"}
      </div>
     );
  }
}

export default Main;
