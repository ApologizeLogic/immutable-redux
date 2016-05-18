import React, { PropTypes, cloneElement, createElement } from 'react';
import { TransitionMotion, spring } from 'react-motion';

class RouteTransition extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getStyles = this.getStyles.bind(this);

    this.state = {
      open: false,
    };
  }

  willEnter() {
    return {
      handler: this.props.children,
      opacity: spring(0),
      scale: spring(0.95),
    };
  }

  willLeave(key, value) {
    return {
      handler: value.handler,
      opacity: spring(0),
      scale: spring(0.95),
    };
  }

  getStyles() {
    const { children, pathname } = this.props;

    // return {
    //   [pathname]: {
    //     handler: children,
    //     opacity: spring(1),
    //     scale: spring(1),
    //   },
    // };
    return [{
      key: pathname,
      data: children,
      style: {
        opacity: spring(1),
        scale: spring(1),
      },
    }];
  }

  render() {
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {interpolated =>
          <div>
            {Object.keys(interpolated).map(key =>
              <div
                key={`${key}-transition`}
                style={{
                  position: 'absolute',
                  opacity: interpolated[key].opacity,
                  transform: `scale(${interpolated[key].scale})`,
                }}
              >
               {interpolated[key].handler}
              </div>
            )}
          </div>
        }
      </TransitionMotion>
    );
  }
}

export default RouteTransition;